var qualificationlist= ["Diploma","BE","ME","PHD"];
var explist=["Fresher","1-2 year","3-4 year",">4 years"];
var language=[{languageName:"C/C++",IsEnabled:"false"},{languageName:"Java",IsEnabled:"true"},{languageName:"CSharp",IsEnabled:"true"},{languageName:"PHP",IsEnabled:"false"},{languageName:"Python",IsEnabled:"false"}];


window.onload = function () {

		var select = document.getElementById("qlist");
		for(var i = 0; i <qualificationlist.length ; i++) {
			var option = document.createElement('option');
			option.text = option.value = qualificationlist[i];
			select.add(option);
		}
		
		var select = document.getElementById("elist");
		for(var i = 0; i <explist.length ; i++) {
			var option = document.createElement('option');
			option.text = option.value = explist[i];
			select.add(option);
	
		}
		
		//var S=console.log(language.length);
		 for(i=0;i<language.length;i++)
		 {
			//console.log(language[i][1]);
			var cb = document.createElement( "input" );
			cb.type = "checkbox";
			cb.id = language[i].languageName;
			cb.name="language";
			cb.value = language[i].languageName;
			if(language[i].IsEnabled==="true")
			{
				cb.checked = true;
			}
			else 
			{
				cb.checked = false;
			}
			//console.log(cb.checked);
			
			var text = document.createTextNode( language[i].languageName );
			
			document.getElementById( 'append' ).appendChild( cb );
			document.getElementById( 'append' ).appendChild( text );
			document.getElementById( 'append' ).appendChild( document.createElement("br"));
		}
						
	};
		function submitForm(){
		
			var genderval = document.querySelector('input[name="gender"]:checked').value;
			// var langval = document.querySelector('input[name="language"]:checked').value;
			var langlist = document.querySelectorAll('input[name="language"]:checked');
			var temp = [];
			for(var x = 0; x < langlist.length;  x++)
			{
				temp.push(langlist[x].value);
			}
			var str = temp.join(', ');
		
			var empobj={
							firstName:document.getElementById("fname").value,
							lastName:document.getElementById("lname").value,
							email : document.getElementById("email").value,
							contactNumber:document.getElementById("contact").value,
							address:document.getElementById("address").value,
							userName:document.getElementById("username").value,
							password:document.getElementById("password").value,
							gender:genderval,
							qualification:document.getElementById("qlist").value,
							experience:document.getElementById("elist").value,
							codingLanguages:str
						}
		
		console.log(empobj);
		console.log("First name :"+empobj.firstName+"\nLastName: "+empobj.lastName+"\nEmail: "+empobj.email+"\nContact num: "+empobj.contactNumber+"\nAddress: "+empobj.address+"\nUser Name: "+empobj.userName+"\nPassword: "+empobj.password+"\nGender : "+empobj.gender+"\nQualification: "+empobj.qualification+"\nExperiance: "+empobj.experience+"\nCoding Languages: "+empobj.codingLanguages);
	}
		
		
		