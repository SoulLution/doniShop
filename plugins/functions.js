import Vue from 'vue'
let validateInput = (pre, name, length, revalue, reverse) => {
	let value = pre[name];
	let obj = {}
	if(!length) length = 1;

	if(reverse === false)
		if(value && revalue)
			if(value !== revalue) obj[name + '_err'] = true;
			else obj[name + '_err'] = false;
		else obj[name + '_err'] = true;	

	else 
		if((!value && value !== 0) || value.length < length || (reverse && value === revalue)) obj[name + '_err'] = true;
		else obj[name + '_err'] = false;

	Vue.set(pre, name + '_err', obj[name + '_err'])
	if(!obj[name + '_err']) return false;
	else return true;
}

let validateEmail = (pre, name) => {
	let value = pre[name];
	let index = null;
	let end = false;
	for(let i = 0; i < value.length; i++)
		if(value[i].charCodeAt(0)=== 64 && i !== 0){
			index = i;
			break;
		}

	if(index)
	for(let i = index; i < value.length; i++)
		if(value[i].charCodeAt(0)=== 46 && i > index + 2){
			end = true;
			index = i;
			break;
		}
	if(index > value.length - 3) end = false;
	Vue.set(pre, name + '_err', !end)
	if(end) return false;
	else return true;
}

let getTime = date => {
	let time = new Date(date);
	return checkTime(time.getHours()) + ':' + checkTime(time.getMinutes()); 
}

let getMonthName = month => {
	switch(month)
  {
    case 0:   return 'январь';
    case 1:   return 'февраль';
    case 2:   return 'март';
    case 3:   return 'апрель';
    case 4:   return 'май';
    case 5:   return 'июнь';
    case 6:   return 'июль';
    case 7:   return 'август';
    case 8:   return 'сентябрь';
    case 9:   return 'октябрь';
    case 10:   return 'ноябрь';
    case 11:   return 'декабрь';
  }
}

let getMonthNameR = month => {
	switch(month)
  {
    case 0:   return 'января';
    case 1:   return 'февраля';
    case 2:   return 'марта';
    case 3:   return 'апреля';
    case 4:   return 'мая';
    case 5:   return 'июня';
    case 6:   return 'июля';
    case 7:   return 'августа';
    case 8:   return 'сентября';
    case 9:   return 'октября';
    case 10:   return 'ноября';
    case 11:   return 'декабря';
  }
}

let getNormalDate = date => {
	let time = new Date(date);
	let now = new Date();
	if(time.setHours(0,0,0,0) === now.setHours(0,0,0,0)) 												return 'Сегодня'
	else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) - 24*60*60*1000))	return 'Вчера'
	else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) + 24*60*60*1000))	return 'Завтра'
	else
	return checkTime(time.getDate()) + ' ' + getMonthNameR(time.getMonth()) + (now.getFullYear() !== time.getFullYear() ? time.getFullYear() : ''); 
}

let checkTime = time => {
	return time >= 10 ? time : '0' + time;
}

let getType = file => {
	let type = file.split('/')[0];
  switch(type)
  {
    case 'image':   return 2;
    case 'audio':   return 3;
    case 'video':   return 5;
    default:    return 4;
  }
}

let getTypeName = type => {
	let t;
	switch(type){
		case 2:  t = 'Фото';  break;
		case 3:  t = 'Аудио'; break;
		case 5:  t = 'Видео'; break;
		default: t = 'Файл';  break;
	}
	return t;
};

let getSize = size =>{
  let sizeN = 0;
  if(size >= 1024000){
    while(size >= 1024000){
      size -=1024000;
      sizeN++;
    }
    size = `\'${size}\'`;
    sizeN += '.' + size[1] + size[2]
    sizeN +='Mb'
  }else{
    while(size >= 1024){
      size -=1024;
      sizeN++;
    }
    sizeN +='Kb'
  }
  return sizeN;
}


let changePopup = (popup, data) => {
	if(!data.title) throw new Error('no data title');
	if(!data.text) throw new Error('no data text');
	if(!data.status && data.status !== 0) throw new Error('no data status');
	popup.title = data.title;
	popup.text = data.text;
	popup.mas = data.mas;
	popup.status = data.status;
	popup.close = false;
	if(data.status >= 2)
		popup.true_button = true;
	else
		popup.true_button = false;
}
let WordNum = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

let getUserName = append => {
	if(append.firstname)
		return (append.lastname ? append.lastname + ' ' : '') + append.firstname
	else return append.company_name;
}

let getTimeOnAudio = audio => {
  let seconds = audio;
  let hours = 0;
  let minuts = 0;
  if(seconds >= 3600)
    while(seconds >= 3600){
      hours++;
      seconds -= 3600;
    }
  if(seconds >= 60)
    while(seconds >= 60){
      minuts++;
      seconds -= 60;
    }
  if(hours == 0) hours = '';
  else {
    if(hours < 10) hours = '0' + hours;
    hours += ':';
  }
  if(minuts < 10) minuts = '0' + minuts;
  if(seconds < 10) seconds = '0' + seconds;
  return hours + minuts + ':' + seconds;
}

let path = 'https://dev.investo24.ru/api/';

const colors = [
	{
		name: 'green',
		hex: '#6aa569'
	},
	{
		name: 'purple',
		hex: '#8f52ce'
	},
	{
		name: 'orange',
		hex: '#e0791b'
	},
	{
		name: 'brown',
		hex: '#9a612c'
	},
	{
		name: 'red',
		hex: '#cc1414'
	},
	{
		name: 'blue',
		hex: '#1789e0'
	},
	{
		name: 'light blue',
		hex: '#14b8cc'
	},
	{
		name: 'pink',
		hex: '#d63b9d'
	},
] 

export default{
install(Vue, options){
		Vue.prototype.$validateInput = validateInput;
		Vue.prototype.$validateEmail = validateEmail;
		Vue.prototype.$getTime = getTime;
		Vue.prototype.$getNormalDate = getNormalDate;
		Vue.prototype.$getType = getType;
		Vue.prototype.$getTypeName = getTypeName;
		Vue.prototype.$getSize = getSize;
		Vue.prototype.$changePopup = changePopup;
		Vue.prototype.$WordNum = WordNum;
		Vue.prototype.$getUserName = getUserName;
		Vue.prototype.$getTimeOnAudio = getTimeOnAudio;
		Vue.prototype.$path = path;
		Vue.prototype.$colors = colors;
	}
}