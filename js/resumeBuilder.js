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
		"images" : 'http://i1.piimg.com/576415/4926b3e627f98305.png'
	},
	{
		"title" : "Netease micro major",
		"dates" : "2016-12 to now",
		"description" : "palceholder",
		"images" : "http://i1.piimg.com/576415/6fa68519c94544a2.png"
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
		"github" : "AnsonDudu@gmail.com",
		"location" : "Guangzhou"
	},
	"skills":["HTML","CSS","Javascript","Adobe Premiere"]
}

var education = {
	"schools":[
		{
			"name": "Shaoguan University",
			"location":"shaoguan",
			"dates": "2009 - 2013",
			"degree": "Bachelor of Science",
			"major": "psychology"
		}
	]
}

bio.display = function(){
	HTMLheaderName = HTMLheaderName.replace('%data%','Anson Chan');
	HTMLheaderRole = HTMLheaderRole.replace('%data%','Web Developer')
	$("#header").prepend(HTMLheaderRole);
	$("#header").prepend(HTMLheaderName);
	HTMLmobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	$("#topContacts").append(HTMLmobile);
	HTMLemail = HTMLemail.replace('%data%',bio.contacts.email);
	$("#topContacts").append(HTMLemail);
	HTMLgithub = HTMLgithub.replace('%data%',bio.contacts.github);
	$("#topContacts").append(HTMLgithub);
	HTMLlocation = HTMLlocation.replace('%data%',bio.contacts.location);
	$("#topContacts").append(HTMLlocation);

	HTMLbioPic = HTMLbioPic.replace('%data%','http://i1.piimg.com/576415/2ea70a2a3a38c7ca.jpg');
	$("#header").append(HTMLbioPic);
	HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
	$("#header").append(HTMLwelcomeMsg);

	if(bio.skills.length > 0){
	 	$("#header").append(HTMLskillsStart);
	 	for(i = 0;  i < bio.skills.length; i++){
		 	var formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
		 	$("#skills").append(formattedSkill);
	 	}
	}

};

work.display = function (){
		for( job in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			var formattedworkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
			var formattedworkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
			$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);	
			var formattedworkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
			$(".work-entry:last").append(formattedworkDates);	
			var formattedworkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
			$(".work-entry:last").append(formattedworkLocation);	
			var formattedworkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
			$(".work-entry:last").append(formattedworkDescription);	
		}
};

education.display = function (){
	$('#education').append(HTMLschoolStart);
	for(var i = 0; i < education.schools.length; i++){
		var formattedschoolName = HTMLschoolName.replace('%data%',education.schools[i].name);
		var formattedschoolDegree = HTMLschoolDegree.replace('%data%',education.schools[i].degree);
		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);	
		var formattedschoolDates = HTMLschoolDates.replace('%data%',education.schools[i].dates);
		$(".education-entry:last").append(formattedschoolDates);	
		var formattedschoolLoacation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
		$(".education-entry:last").append(formattedschoolLoacation);	
		var formattedschoolMajor = HTMLschoolMajor.replace('%data%',education.schools[i].major);
		$(".education-entry:last").append(formattedschoolMajor);	
	}
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
		var formattedprojectimages = HTMLprojectImage.replace('%data%',projects.projects[project].images);
		$(".project-entry:last").append(formattedprojectimages);
	}
};

bio.display();
work.display();
projects.display();
education.display();

// // 更换国际名称
// function inName(name){
// 	name = name.trim().split(' ');
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] + " " +name[1];
// }

// $("h1").after(internationalizeButton);


// install googlemap
$('#mapDiv').append(googleMap);