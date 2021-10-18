const slot2 = document.getElementById('skill_slot2');
const ctx2 = slot2.getContext('2d');
const result2 = document.getElementById('result2');
const resultPhone2 = document.getElementById('result_phone2');
const button2 = document.getElementById('button2');
let popup2 = document.getElementById('popup2');
const blackBackground2 = document.getElementById('black-background2');

const skillMax2 = 10;
const courseName2 = '28course';

const skillList2 = {
	0:'トライセプス',
	1:'チョウツガイのポーズ',
	2:'扇のポーズ',
	3:'立木のポーズ',
	4:'リングアロー',
	5:'カタニプッシュ',
	6:'バンザイツイスト',
	7:'英雄3のポーズ',
	8:'ねじり体側のポーズ',
	9:'英雄1のポーズ',
	10:'英雄2のポーズ',
}

const countList2 = {
	0:'８回',
	1:'１２回',
	2:'１６回',
	3:'２０回',
	4:'２８回'
}

const firstMessage2 = '計測中...計測中...';
const resultMessage2 = 'ホナ　イコカ！';
const startButtonText2 = '左右コース　スタート';

let drawImage2 = (x,y,srcUrl,ctx) => {
	const img = new Image();
	img.src = srcUrl;
	img.onload = () => {
		ctx2.drawImage(img,x,y,imageWidth,imageHeight);
	}
}

//canvasの画像を消す
let clearImage2 = (x,y,w,h,ctx) => {
	ctx2.clearRect(x,y,w,h,ctx);
}

let course2 = new Course(slot2,ctx2,result2,resultPhone2,button2,skillMax2,courseName2,skillList2,countList2,firstMessage2,resultMessage2);
let drawskill2 = new DrawSkill(course2,drawImage2,clearImage2);
let course2Button = new Button(course2,drawskill2,startButtonText2,popup2);

course2.start();

course2Button.button.addEventListener('click',(event) => {
	if(course2Button.button.value == 'start'){
		course2Button.start();
		resultAnnounceMusic.pause();
	}else{
		course2Button.stop();
		if(windowMaxWidth <= windowWidth){
			resultAnnounceMusic.currentTime = 0;
			resultAnnounceMusic.play();
			setTimeout(function(){
				popup2.classList.add('is-show');
			},1800)
			button2.disabled = true;
		}
	}
});

if(windowMaxWidth <= windowWidth){
	blackBackground2.addEventListener('click',(event) => {
		popup2.classList.remove('is-show');
		button2.disabled = false;
	})
	
	result2.addEventListener('click',(event) => {
		popup2.classList.remove('is-show');
		button2.disabled = false;
	})
}