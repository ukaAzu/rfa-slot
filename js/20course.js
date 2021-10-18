const slot1 = document.getElementById('skill_slot');
const ctx1 = slot1.getContext('2d');
const result1 = document.getElementById('result');
const result_phone1 = document.getElementById('result_phone');
const button1 = document.getElementById('button');
let popup1 = document.getElementById('popup1');
const blackBackground1 = document.getElementById('black-background');
const skillMax1 = 15;
const courseName1 = '20course';
const skillList1 = {
	0:'ワイドスクワット',
	1:'アシパカパカ',
	2:'ウシロプッシュ',
	3:'サゲテプッシュ',
	4:'スクワット',
	5:'ニートゥーチェスト',
	6:'バンザイサイドベンド',
	7:'バンザイスクワット',
	8:'バンザイプッシュ',
	9:'バンザイモーニング',
	10:'ヒップリフト',
	11:'プランク',
	12:'ベントオーバー',
	13:'マエニプッシュ',
	14:'モモデプッシュ',
	15:'レッグレイズ'
}

const countList1 = {
	0:'８回',
	1:'１０回',
	2:'１４回',
	3:'１６回',
	4:'２０回'
}

const firstMessage1 = 'ここに結果が表示されるよ！';
const resultMessage1 = 'やろう！ファイト！！';
const startButtonText1 = '筋トレコース　スタート'

let drawImage1 = (x,y,srcUrl,ctx) => {
	const img = new Image();
	img.src = srcUrl;
	img.onload = () => {
		ctx1.drawImage(img,x,y,imageWidth,imageHeight);
	}
}

//canvasの画像を消す
let clearImage1 = (x,y,w,h,ctx) => {
	ctx1.clearRect(x,y,w,h,ctx);
}

let course1 = new Course(slot1,ctx1,result1,result_phone1,button1,skillMax1,courseName1,skillList1,countList1,firstMessage1,resultMessage1);
let drawskill1 = new DrawSkill(course1,drawImage1,clearImage1);
let course1Button = new Button(course1,drawskill1,startButtonText1,popup1);

course1.start();

//スタート&ストップボタンの動き
course1Button.button.addEventListener('click',(event) => {
	if(course1Button.button.value == 'start'){
		//スタートボタンをクリックしたらスロット回転スタート
		course1Button.start();
		resultAnnounceMusic.pause();
	}else{
		//ストップボタンを押したらスロット回転ストップ。音楽の再生。1.8秒後にポップアップ表示。
		//スタートボタンは押せないようにする。
		course1Button.stop();
		if(windowMaxWidth <= windowWidth){
			resultAnnounceMusic.currentTime = 0;
			resultAnnounceMusic.play();
			setTimeout(function(){
				popup1.classList.add('is-show');
			},1800)
			button1.disabled = true;
		}
	}
});

//画面の黒い部分かポップアップをクリックしたら、ポップアップを閉じる。スタートボタンを押せるようにする。
if(windowMaxWidth <= windowWidth){
	blackBackground1.addEventListener('click',(event) => {
		popup1.classList.remove('is-show');
		button1.disabled = false;
	})

	result1.addEventListener('click',(event) => {
		popup1.classList.remove('is-show');
		button1.disabled = false;
	})
}
