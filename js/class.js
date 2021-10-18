//各コース
class Course{
	constructor(slot,ctx,result,resultPhone,button,skillMax,courseName,skillList,countList,firstMessage,resultMessage){
		this.slot = slot;
		this.ctx = ctx;
		this.result = result;
		this.resultPhone = resultPhone;
		this.resultCtx = this.result.getContext('2d');
		this.resultPhoneCtx = this.resultPhone.getContext('2d');
		this.button = button;
		this.skillMax = skillMax;
		this.courseName = courseName;
		this.skillList = skillList;
		this.countList = countList;
		this.firstMessage = firstMessage;
		this.resultMessage = resultMessage;

	}
	start(){
		//result画面の初期表示
		if(windowMaxWidth <= windowWidth){
			this.resultCtx.font = '16px Arial';
			this.resultCtx.fillText(this.firstMessage,30,30);
		}else{
			this.resultPhoneCtx.font = '16px Arial';
			this.resultPhoneCtx.fillText(this.firstMessage,30,30);
		}
	}
}

//スロットに画像を表示する
class DrawSkill{
	constructor(Course,drawImage,clearImage){
		this.ctx = Course.ctx;
		this.skillMax = Course.skillMax;
		this.courseName = Course.courseName;
		this.drawImage = drawImage;
		this.clearImage = clearImage;
	}

	drawStatusRandom(){
		//ランダムな数を作る
		randomStatusNumber = Math.floor(Math.random()*(statusMax+1-Min))+Min;
		//真ん中に描く
		this.drawImage(9,12,`./img/`+folderName+`/status${randomStatusNumber}.png`);
		this.clearImage(9,12,imageWidth,imageHeight);
		//console.log(randomStatusNumber);
	}

	drawSkillRandom(){
		//ランダムな数を作る
		randomSkillNumber = Math.floor(Math.random()*(this.skillMax+1-Min))+Min;
		//真ん中に描く
		this.drawImage(109,12,`./img/`+this.courseName+`/skill${randomSkillNumber}.png`);
		this.clearImage(109,12,imageWidth,imageHeight);
		//console.log(randomSkillNumber);
	}

	drawCountRandom(){
		//ランダムな数を作る
		randomCountNumber = Math.floor(Math.random()*(countMax+1-Min))+Min;
		//右端に描く
		this.drawImage(209,12,`./img/`+this.courseName+`/count${randomCountNumber}.png`);
		this.clearImage(109,12,imageWidth,imageHeight);
		//console.log(randomCountNumber);
	}
}

//スタート＆ストップボタンの機能
class Button{
	constructor(Course,DrawSkill,startButtonText,popup){
		this.resultCtx = Course.resultCtx;
		this.resultPhoneCtx = Course.resultPhoneCtx;
		this.button = Course.button;
		this.skillList = Course.skillList;
		this.countList = Course.countList;
		this.DrawSkill = DrawSkill;
		this.firstMessage = Course.firstMessage;
		this.resultMessage = Course.resultMessage;
		this.startButtonText = startButtonText;
		this.popup = popup;
	}

	start(){
		if(windowMaxWidth <= windowWidth){
			roll = setInterval(() => {
				this.resultCtx.clearRect(0,0,750,500);
				this.resultCtx.font = '16px Arial';
				this.resultCtx.fillText(this.firstMessage,30,30);
				this.DrawSkill.drawStatusRandom();
				this.DrawSkill.drawSkillRandom();
				this.DrawSkill.drawCountRandom()
				this.button.innerText = 'ストップ';
				this.button.value = 'stop';
			},50);
		}else{
			roll = setInterval(() => {
				this.resultPhoneCtx.clearRect(0,0,750,500);
				this.resultPhoneCtx.font = '16px Arial';
				this.resultPhoneCtx.fillText(this.firstMessage,30,30);
				this.DrawSkill.drawStatusRandom();
				this.DrawSkill.drawSkillRandom();
				this.DrawSkill.drawCountRandom()
				this.button.innerText = 'ストップ';
				this.button.value = 'stop';
			},50);
		}
	}


	stop(){
		clearInterval(roll);
		if(windowMaxWidth <= windowWidth){
			this.button.innerText = this.startButtonText;
			this.button.value = 'start';
			this.resultCtx.clearRect(0,0,750,500);
			this.resultCtx.font = '16px Arial';
			this.resultCtx.fillText(statusList[randomStatusNumber],30,30);
			this.resultCtx.fillText(this.skillList[randomSkillNumber],30,60);
			this.resultCtx.fillText(this.countList[randomCountNumber],30,90);
			this.resultCtx.fillText(this.resultMessage,30,120);
		}else{
			this.button.innerText = this.startButtonText;
			this.button.value = 'start';
			this.resultPhoneCtx.clearRect(0,0,750,500);
			this.resultPhoneCtx.font = '16px Arial';
			this.resultPhoneCtx.fillText(statusList[randomStatusNumber],30,30);
			this.resultPhoneCtx.fillText(this.skillList[randomSkillNumber],30,60);
			this.resultPhoneCtx.fillText(this.countList[randomCountNumber],30,90);
			this.resultPhoneCtx.fillText(this.resultMessage,30,120);
		}
	}
}
