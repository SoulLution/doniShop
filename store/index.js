export const state = () => ({
	project: null,
	rightShow: true,
	showFilters: false,
	projectsLimit: 9,
	offset: 9,
	projects: [],
	selectedParam: null,
	analyzes: [],
	page: 0,
	pages: 0,
	filters: [
		{
			id:1,
			title:'Стадия проекта',
			options:[
				{
					id:1,
					title:'Все проекты',
					active: false
				}
			]
		}
	],
	selectedFilters:[],
	notifications:[],
	photoRoute:'https://dev.investo24.ru/api/photo/',
	documents:[
		{
			id:1,
			name:"Счет",
			type:'docs',
			size:'5KB'
		},
		{
			id:2,
			name:"Строительство комплекса AgroCity",
			type:'doc',
			size:'5KB'
		},
		{
			id:3,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		},
		{
			id:4,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		},
		{
			id:5,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		},
		{
			id:6,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		},
		{
			id:7,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		},
		{
			id:8,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		},
		{
			id:9,
			name:"ВЛызщлфв влыфщзвлфзы лвщлвылфв лвщылфв",
			type:'docs',
			size:'5KB'
		}
	]
})

export const mutations = {
	setFavorite(state, f){
		state.project.favorite = f;
	},
	showFilters(state, show) {
		state.showFilters = show;
	},
	setMyProjects(state, projects){
		state.projects = projects;
	},
	setRightShow(state, show){
		state.rightShow = show;
	},
	setActiveProject(state, project) {
		state.project = project;
		state.project.steps.forEach(el => {
			el.resources.forEach(el2 => {
				el2.type = el2.resource_type;
			})
		})
		let infoByProject = [
			{
				title: state.project.investor_share,
				subtitle: 'Доля прибыли'
			},
			{
				title: state.project.goal,
				subtitle: 'Цель инвестирования'
			},
			{
				title: state.project.annual_yield,
				subtitle: 'Годовая доходность'
			},
			{
				title: state.project.risk,
				subtitle: 'Риски'
			},
			{
				title: state.project.investor_type,
				subtitle: 'Тип партнерства'
			},
			{
				title: state.project.partner_offer,
				subtitle: 'Предложение партнеру/инвестору'
			},
			{
				subtitle: 'Сумма инвестиций',
				title: state.project.invest_amount,
			  },
			  {
				subtitle: 'Срок окупаемости',
				title: state.project.profit_time,
			  },
			  {
				subtitle: 'Срок реализации',
				title: state.project.realization_period,
			  },
			  {
				subtitle: 'Форма участия',
				title: state.project.partner_offer,
			  }
		]
		state.project.infoByProject = infoByProject;
		state.project.details = [
			{
			  id: 1,
			  title: 'Сумма инвестиций',
			  text: state.project.invest_amount || '-----',
			  color: 'success',
			},
			{
			  id: 2,
			  title: 'Срок окупаемости',
			  text: state.project.profit_time || '-----',
			  color: 'danger',
			},
			{
			  id: 3,
			  title: 'Срок реализации',
			  text: state.project.realization_period || '-----',
			  color: 'primary',
			},
			{
			  id: 4,
			  title: 'Форма участия',
			  text: state.project.partner_offer || '-----',
			  color: 'warning',
			}
		  ]
		state.rightShow = true;
	},
	setProjects(state, projects){
  		state.projects = projects;
  	},
  	addProjects(state, projects){
  		state.projects = state.projects.concat(projects);
  	},

		setAnalyzes(state, analyzes){
  		state.analyzes = analyzes;
  	},
  	addAnalyzes(state, analyzes){
  		state.analyzes = state.analyzes.concat(analyzes);
  	},
  	setPages(state, data){
  		state.pages = data.pages;
  		state.page = data.page;
  	},


  	setActiveParam(state, param){
  		state.selectedParam = param;
  		state.offset = 9;
  	},
  	addOffset(state){
  		state.offset += state.projectsLimit;
  	},
  	getProjectByID(state, item_id){
  		//request
  		//state.project = 
  	},
  	setFilters(state, filters) {
  		state.filters = filters;
  	},
  	selectFilter(state, options){
  		let filter = state.filters.find(element => element.id == options.filter_id),
  			dictionary = filter.dictionary;

  		if (options.item_id == -1){
  			let prevIndex;
  			state.selectedFilters.forEach((element, index) => {
  				if(element.dictionary == filter.dictionary_name)
  					prevIndex = index;
  			});
  			state.selectedFilters.splice(prevIndex, 1);
  		}

 		dictionary
 		.find(element => element.id == options.item_id).selected = true;

  		dictionary
  		.forEach (element => 
  			{ if (element.id != options.item_id) element.selected = false });

  		state.filters = JSON.parse(JSON.stringify(state.filters));

  		if (options.item_id != -1) {
  			let prevIndex;
  			state.selectedFilters.forEach((element, index) => {
  				if(element.dictionary == filter.dictionary_name)
  					prevIndex = index;
  			});
  			if(!(prevIndex >= 0))
	  			state.selectedFilters.push({
	  					"dictionary":filter.dictionary_name,
	  					"id":options.item_id
	  			})
	  		else
	  			state.selectedFilters.splice(prevIndex, 1, {
	  					"dictionary":filter.dictionary_name,
	  					"id":options.item_id
	  			})
  		}
  	},
  	checkNotifs(state){
  		state.notifications.filter(element => element.isread == false)
  		.forEach(element => element.isread = true);
  	},
  	setNotifications(state, notices){
  		state.notifications = notices;
  	}
}

export const actions = {
	async getInfoProject(context, project_id){
		const {project} = await this.$axios.$post('/api', {
			method: 'get-project',
			project_id
		})
		context.commit('setActiveProject', project)
	},

	async getFilters(context){
  		let {dictionaries} = await this.$axios.$post('/api/', {"method":"get-dictionaries"});
  		console.log(dictionaries)
  		dictionaries.forEach(element => {
  			element.dictionary.unshift({"id":-1, "name": "Все", selected: true});
  		});
  		context.commit('setFilters', dictionaries);
	},

	async getAnalysesType(context){
  		let dictionaries = [];
  		let types = [];
  		let obj0 = {
  			id:1, 
  			name: "Активные", 
  			selected: true
  		},
  		obj1 = {
  			id:2, 
  			name: "Архивные", 
  			selected: false
  		},
  		obj2 = {
  			id:3, 
  			name: "В процессе", 
  			selected: false
  		};
  		types.push(obj0)
  		types.push(obj1)
  		types.push(obj2)
  		dictionaries.push({
  			id: 1000,
  			dictionary: types,
  			dictionary_title: 'Состояние',
  			dictionary_name: 'category'
  		})
  		context.commit('setFilters', dictionaries);
	},

	async getProjects(context, options){
		let projects = [];
		let reqLimits = options.limits || [0, context.state.projectsLimit];

		if (context.state.selectedParam == 'all' || !context.state.selectedParam)
			projects = await this.$axios.$post('/api/', {"method":"get-all-projects", "offset":reqLimits[0], "limit":reqLimits[1]});
		if (context.state.selectedParam == 'user')
			projects = await this.$axios.$post('/api/', {"method":"get-user-projects", "offset":reqLimits[0], "limit":reqLimits[1]});
		if (context.state.selectedParam == 'invest')
			projects = await this.$axios.$post('/api/', {"method":"get-invest-projects", "offset":reqLimits[0], "limit":reqLimits[1]});
		if (context.state.selectedParam == 'sub')
			projects = await this.$axios.$post('/api/', {"method":"get-sub-projects", "offset":reqLimits[0], "limit":reqLimits[1]});

		context.commit('setPages', {pages: projects.pages, page: projects.page});
		context.commit('setProjects', projects.projects);
		// if (!options.push)
		// 	context.commit('setProjects', projects.projects);
		// else
		// 	context.commit('addProjects', projects.projects);
	},
	async getProjectsByFilters(context, options){
		let projects = [];
		let reqLimits = options.limits || [0, context.state.projectsLimit];
		
		if (context.state.selectedParam == 'all' || !context.state.selectedParam)
			projects = await this.$axios.$post('/api/', {"method":"get-all-projects", "page":reqLimits[0], "limit":reqLimits[1], "filters":context.state.selectedFilters});
		if (context.state.selectedParam == 'user')
			projects = await this.$axios.$post('/api/', {"method":"get-user-projects", "page":reqLimits[0], "limit":reqLimits[1], "filters":context.state.selectedFilters});
		if (context.state.selectedParam == 'invest')
			projects = await this.$axios.$post('/api/', {"method":"get-invest-projects", "page":reqLimits[0], "limit":reqLimits[1], "filters":context.state.selectedFilters});
		if (context.state.selectedParam == 'sub')
			projects = await this.$axios.$post('/api/', {"method":"get-sub-projects", "page":reqLimits[0], "limit":reqLimits[1], "filters":context.state.selectedFilters});

		context.commit('setPages', {pages: projects.pages, page: projects.page});
		context.commit('setProjects', projects.projects);
		// if (!options.push)
		// 	context.commit('setProjects', projects.projects);
		// else
		// 	context.commit('addProjects', projects.projects);
	},

	async getAnalysesByFilters(context, options){
		let projects = [];
		let reqLimits = options.limits || [0, context.state.projectsLimit];
		
		projects = await this.$axios.$post('/api/', {"method":"GET-ANALYZES", "page":reqLimits[0], "limit":reqLimits[1], "type":context.state.selectedFilters[0] ? context.state.selectedFilters[0].id : 1});
		context.commit('setPages', {pages: projects.pages, page: projects.page});
		if (!options.push)
			context.commit('setAnalyzes', projects.analyzes);
		else
			context.commit('addAnalyzes', projects.analyzes);
		
	},
	
	async getNotifications(context){
		let {notices} = await this.$axios.$post('/api/', {"method":"get-notices"});
		context.commit('setNotifications', notices);
	},
	async getNotificationsByCategory(context, category_id){
		let {notices} = await this.$axios.$post('/api/', {
					"method":"get-notices",
					"project_id":category_id
		});
		context.commit('setNotifications', notices);	
	},
	async getDocs(context, status){
		console.log(await this.$axios.$post('/api/', {
			"method":"get-documents",
			"status":status
		}));
	}
}

export const getters = {
	filterTitle(state) {
		return (filter_id) => {
			if (!filter_id) return;
			if (!state.filters.find(element => element.id == filter_id).dictionary)
				return 'Нет фильтров';
			return state.filters.find(element => element.id == filter_id).dictionary.find(element => element.selected).name;
		}
	},
	notificationsCount(state) {
		if (!state.notifications) return 0;
		return state.notifications.filter(element => element.isRead == false).length;
	},
	notifications(state){
		return (category_id, onlyNew) => {
			if (!state.notifications) return null;
			//category_id 1 - типо категория "Все уведомления"
			if ((!category_id || category_id == 1) && onlyNew)
				return state.notifications.filter(element => element.isRead == false);
			if ((!category_id || category_id == 1) && !onlyNew)
				return state.notifications;
			if (onlyNew)
				return state.notifications.filter(element => element.category_id == category_id).filter(element => element.isRead == false);
			else
				return state.notifications.filter(element => element.category_id == category_id);
		}
	}
}

export const strict = false