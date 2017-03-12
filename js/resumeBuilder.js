/*
This is empty on purpose! Your code to build the resume will go here.
 */

// resume objects data 

var work = {
	"jobs" : [
	{
		"employer" : "ibeiliao.com",
		"title" : "editor",
		"location" : "Guangzhou",
		"dates" : "2015-12 to 2016-04",
		"description" : "palceholder"
	},
	{
		"employer" : "yitanghaoke",
		"title" : "editor",
		"location" : "Guangzhou",
		"dates" : "2015-07 to 2015-11"	,
		"description" : "palceholder"
	},
	{
		"employer" : "anyongxin",
		"title" : "social worker",
		"location" : "Guangzhou",
		"dates" : "2014-06 to 2015-06"	,
		"description" : "palceholder"
	}]
}

var projects = {
	"projects" : [
	{
		"title" : "Udacity fontend nano degree",
		"dates" : "2016-12 to now",
		"description" : "palceholder",
		"images" : "http://placehold.it/350x150"
	},
	{
		"title" : "Netease micro major",
		"dates" : "2016-12 to now",
		"description" : "palceholder",
		"images" : "http://placehold.it/350x150"
	},
	]
}

var bio = {
	"name" : "Anson Chan",
	"role" : "Web Developer",
	"welcomeMessage" : "Hello World",
	"biopic" : "http://placehold.it/350x150" ,
	"contacts" : {
		"mobile" : 13802782133,
		"email" : "andyson_chan@163.com",
		"github" : "AnsonDudu",
		"location" : "Guangzhou"
	},
	"skills":["HTML","CSS","Javascript","Adoube Premiere"]
}

var education = {
	"schools":[
		{
			"name": "Shaoguan University",
			"location":"shaoguan",
			"city": "Shaoguan",
			"degree": "Bachelor of Science",
			"major": "psychology"
		}
	]
}



// Add Header
bio.display = function(){
	HTMLheaderName = HTMLheaderName.replace('%data%','Anson Chan');
	$("#header").prepend(HTMLheaderName);

	HTMLheaderRole = HTMLheaderRole.replace('%data%','Web Developer')
	$("#header").append(HTMLheaderRole);

// Add Skills
	if(bio.skills.length > 0){
	 	$("#header").append(HTMLskillsStart);
	 	var formattedSkill = HTMLskills.replace('%data%',bio.skills[0]);
	 	$("#skills").append(formattedSkill);
	 	var formattedSkill = HTMLskills.replace('%data%',bio.skills[1]);
	 	$("#skills").append(formattedSkill);
	 	var formattedSkill = HTMLskills.replace('%data%',bio.skills[2]);
	 	$("#skills").append(formattedSkill);
	}
};

// Add Contact

// Add Pic

// Add  WorkExprience

// var work = {};
// work.position = "editor";
// work.employer = "ibeiliao.com";
// work.years = 0.5;

// function displayWork(){

// 	var Work = function(a,b,c,d,e){
// 		return(
// 		{'Employer': a,
// 		'Title': b,
// 		'Date': c,
// 		'location': d,
// 		'Description': e}
// 		);
// 	}

	// var workExp1 = new Work('ibeiliao.com','editor','2015-12 to 2016-05','Guangzhou','palceholder');
	// var workExp2 = new Work('yitanghaoke','editor','2015-07 to 2015-11','Guangzhou','palceholder');
	// var workExp3 = new Work('anyongxin','social worker','2014-06 to 2015-06','Guangzhou','palceholder');


	// bio.work = [workExp1,workExp2,workExp3];
	// var workExp = bio.work;

	work.display = function displaywork(){
		for( job in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			var formattedworkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
			$(".work-entry:last").append(formattedworkEmployer);	
			var formattedworkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
			$(".work-entry:last").append(formattedworkDates);	
			var formattedworkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
			$(".work-entry:last").append(formattedworkTitle);	
			var formattedworkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
			$(".work-entry:last").append(formattedworkLocation);	
			var formattedworkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
			$(".work-entry:last").append(formattedworkDescription);	
		}
	};

	// for(i=0; i<workExp.length; i++){
	// 	var emp = workExp[i].Employer;
	// 	var formattedworkEmployer = HTMLworkEmployer.replace('%data%',emp);
	// 	$(".work-entry").eq(i).append(formattedworkEmployer);
	// 	var tit = workExp[i].Title;
	// 	var formattedworkTitle = HTMLworkTitle.replace('%data%',tit);
	// 	$(".work-entry").eq(i).append(formattedworkTitle);
	// 	var dat = workExp[i].Date;
	// 	var formattedworkDates = HTMLworkDates.replace('%data%',dat);
	// 	$(".work-entry").eq(i).append(formattedworkDates);
	// 	var loc = workExp[i].location;
	// 	var formattedworkLocation = HTMLworkLocation.replace('%data%',loc);
	// 	$(".work-entry").eq(i).append(formattedworkLocation);
	// 	var des = workExp[i].Description;
	// 	var formattedworkDescription = HTMLworkDescription.replace('%data%',des);
	// 	$(".work-entry").eq(i).append(formattedworkDescription);
	// }

// displayWork();

function inName(name){
	name = name.trim().split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
}

projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	for(project in projects.projects){
		var formattedprojecttitle = HTMLprojectTitle.replace('%data%',projects.projects[project].title);
		$(".project-entry:last").append(formattedprojecttitle);
		var formattedprojectdates = HTMLprojectDates.replace('%data%',projects.projects[project].dates)
		$(".project-entry:last").append(formattedprojectdates);
		var formattedprojectdescription = HTMLprojectDescription.replace('%data%',projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectdescription);
		var formattedprojectimages = HTMLprojectTitle.replace('%data%',projects.projects[project].images);
		$(".project-entry:last").append(formattedprojectimages);
	}
};

bio.display();
work.display();
projects.display();



// 更换国际名称
$("h1").after(internationalizeButton);


// install googlemap
$('#mapDiv').append(googleMap);