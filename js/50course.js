const slot3 = document.getElementById('skill_slot3');
const ctx3 = slot3.getContext('2d');
const result3 = document.getElementById('result3');
const resultPhone3 = document.getElementById('result_phone3');
const button3 = document.getElementById('button3');
let popup3 = document.getElementById('popup3');
const blackBackground3 = document.getElementById('black-background3');

const skillMax3 = 12;
const courseName3 = '50course';

const skillList3 = {
	0:'スワイショウ',
	1:'バタバタレッグ',
	2:'リングアゲサゲ',
	3:'アームツイスト',
	4:'グルグルアーム',
	5:'バンザイコシフリ',
	6:'ロシアンツイスト',
	7:'ハサミレッグ',
	8:'マウンテンクライマー',
	9:'モモアゲアゲ',
	10:'ステップアップ',
	11:'モモアゲコンボ',
	12:'アゲサゲコンボ',
}

const countList3 = {
	0:'２０回',
	1:'２８回',
	2:'３４回',
	3:'４２回',
	4:'５０回'
}

const firstMessage3 = 'ここに結果が表示されるぞ、ガハハ！';
const resultMessage3 = 'やってみろ！！';
const startButtonText3 = 'リズム系コース　スタート'

let drawImage3 = (x,y,srcUrl,ctx) => {
	const img = new Image();
	img.src = srcUrl;
	img.onload = () => {
		ctx3.drawImage(img,x,y,imageWidth,imageHeight);
	}
}

//canvasの画像を消す
let clearImage3 = (x,y,w,h,ctx) => {
	ctx3.clearRect(x,y,w,h,ctx);
}

let course3 = new Course(slot3,ctx3,result3,resultPhone3,button3,skillMax3,courseName3,skillList3,countList3,firstMessage3,resultMessage3);
let drawskill3 = new DrawSkill(course3,drawImage3,clearImage3);
let course3Button = new Button(course3,drawskill3,startButtonText3,popup3);

course3.start();

course3Button.button.addEventListener('click',(event) => {
	if(course3Button.button.value == 'start'){
		course3Button.start();
		resultAnnounceMusic.pause();
	}else{
		course3Button.stop();
		if(windowMaxWidth <= windowWidth){
			resultAnnounceMusic.currentTime = 0;
			resultAnnounceMusic.play();
			setTimeout(function(){
				popup3.classList.add('is-show');
			},1800)
			button3.disabled = true;
		}
	}
});

if(windowMaxWidth <= windowWidth){
	blackBackground3.addEventListener('click',(event) => {
		popup3.classList.remove('is-show');
		button3.disabled = false;
	})
	
	result3.addEventListener('click',(event) => {
		popup3.classList.remove('is-show');
		button3.disabled = false;
	})
}