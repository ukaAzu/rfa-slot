const imageWidth = 80;
const imageHeight = 130;
const Min = 0;
const countMax = 4;
const statusMax = 5;
const folderName = 'status';
let randomSkillNumber;
let randomCountNumber;
let randomStatusNumber;
let roll;
const statusList = {
	0:'テンション高めに',
	1:'歌いながら',
	2:'無言で',
	3:'リングのかけ声を真似しながら',
	4:'鍛える筋肉名を言いながら',
	5:'質問に全レスしながら',
	6:'オババの真似しながら',
	7:'フッキンリーの真似しながら',
	8:'アッシリーナの真似しながら',
	9:'ジョー・ワンの真似しながら'
}
const windowMaxWidth = 599;
let windowWidth = window.innerWidth;
const resultAnnounceMusic = document.getElementById('resultAnnounceMusic');