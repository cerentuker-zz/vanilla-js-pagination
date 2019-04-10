/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
'use strict';

/*
 Note : paid attention to limit my coding to only the course content, 
 so did not use any jquery or anything other than what is taught in the course content itself
 -Ceren
*/

//max number of items per page
const numberOfItemsPerPage = 10;

//dummy list of students, can be passed around instead of being global, but actually should be read/fetched from outside of code
var list = [{
   avatar: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
   name: "iboya vat",
   email: "iboya.vat@example.com",
   dateStr: "Joined 07/15/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
   name: "aapo niskanen",
   email: "aapo.niskanen@example.com",
   dateStr: "Joined 06/15/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
   name: "phillip cox",
   email: "phillip.cox@example.com",
   dateStr: "Joined 09/11/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
   name: "zilda moreira",
   email: "zilda.moreira@example.com",
   dateStr: "Joined 07/15/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
   name: "lilou le gall",
   email: "lilou.le gall@example.com",
   dateStr: "Joined 06/16/13"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
   name: "lucy hall",
   email: "lucy.hall@example.com",
   dateStr: "Joined 09/11/16"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
   name: "mark colin",
   email: "mark.colin@example.com",
   dateStr: "Joined 01/14/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
   name: "sara alves",
   email: "sara.alves@example.com",
   dateStr: "Joined 07/19/16"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
   name: "ramon macrae",
   email: "ramon.macrae@example.com",
   dateStr: "Joined 05/13/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
   name: "connor taylor",
   email: "connor.taylor@example.com",
   dateStr: "Joined 05/18/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
   name: "aymeric morel",
   email: "aymeric.morel@example.com",
   dateStr: "Joined 06/13/13"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
   name: "lorenz otto",
   email: "lorenz.otto@example.com",
   dateStr: "Joined 05/11/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
   name: "karl williamson",
   email: "karl.williamson@example.com",
   dateStr: "Joined 01/12/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
   name: "ouassim heering",
   email: "ouassim.heering@example.com",
   dateStr: "Joined 01/18/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
   name: "roberto molina",
   email: "roberto.molina@example.com",
   dateStr: "Joined 06/13/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
   name: "jordan hubert",
   email: "jordan.hubert@example.com",
   dateStr: "Joined 06/13/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
   name: "melvin baker",
   email: "melvin.baker@example.com",
   dateStr: "Joined 09/18/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
   name: "everett gordon",
   email: "everett.gordon@example.com",
   dateStr: "Joined 06/17/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
   name: "aiden ma",
   email: "aiden.ma@example.com",
   dateStr: "Joined 07/18/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
   name: "florent gerard",
   email: "florent.gerard@example.com",
   dateStr: "Joined 02/12/13"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
   name: "amber chen",
   email: "amber.chen@example.com",
   dateStr: "Joined 07/12/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
   name: "alexandra davies",
   email: "alexandra.davies@example.com",
   dateStr: "Joined 05/11/13"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
   name: "sergio cole",
   email: "sergio.cole@example.com",
   dateStr: "Joined 02/17/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
   name: "edgar dixon",
   email: "edgar.dixon@example.com",
   dateStr: "Joined 06/17/11"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
   name: "kirk myers",
   email: "kirk.myers@example.com",
   dateStr: "Joined 09/17/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
   name: "ani hesseling",
   email: "ani.hesseling@example.com",
   dateStr: "Joined 08/14/16"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
   name: "victoire bonnet",
   email: "victoire.bonnet@example.com",
   dateStr: "Joined 05/13/16"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
   name: "marcos morales",
   email: "marcos.morales@example.com",
   dateStr: "Joined 01/12/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
   name: "nils neumann",
   email: "nils.neumann@example.com",
   dateStr: "Joined 03/11/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
   name: "emily harrison",
   email: "emily.harrison@example.com",
   dateStr: "Joined 07/18/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
   name: "matthew fortin",
   email: "matthew.fortin@example.com",
   dateStr: "Joined 03/18/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
   name: "charlotte steward",
   email: "charlotte.steward@example.com",
   dateStr: "Joined 02/18/11"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
   name: "marceau rodriguez",
   email: "marceau.rodriguez@example.com",
   dateStr: "Joined 07/13/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
   name: "hudson anderson",
   email: "hudson.anderson@example.com",
   dateStr: "Joined 09/12/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
   name: "warren phillips",
   email: "warren.phillips@example.com",
   dateStr: "Joined 01/11/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
   name: "leo niva",
   email: "leo.niva@example.com",
   dateStr: "Joined 09/14/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
   name: "hani prevoo",
   email: "hani.prevoo@example.com",
   dateStr: "Joined 01/11/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
   name: "veronica rodriguez",
   email: "veronica.rodriguez@example.com",
   dateStr: "Joined 07/17/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
   name: "ginestal das neves",
   email: "ginestal.das neves@example.com",
   dateStr: "Joined 06/19/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
   name: "devon barnes",
   email: "devon.barnes@example.com",
   dateStr: "Joined 09/19/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
   name: "brennan pierce",
   email: "brennan.pierce@example.com",
   dateStr: "Joined 05/15/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
   name: "zachary singh",
   email: "zachary.singh@example.com",
   dateStr: "Joined 05/19/11"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
   name: "arlo harris",
   email: "arlo.harris@example.com",
   dateStr: "Joined 07/12/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
   name: "hannah ginnish",
   email: "hannah.ginnish@example.com",
   dateStr: "Joined 05/17/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
   name: "goos brunt",
   email: "goos.brunt@example.com",
   dateStr: "Joined 09/15/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
   name: "eduard riedel",
   email: "eduard.riedel@example.com",
   dateStr: "Joined 06/12/15"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
   name: "geesken jekel",
   email: "geesken.jekel@example.com",
   dateStr: "Joined 02/12/13"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
   name: "dolores ryan",
   email: "dolores.ryan@example.com",
   dateStr: "Joined 06/17/16"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
   name: "steven rogers",
   email: "steven.rogers@example.com",
   dateStr: "Joined 01/18/11"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
   name: "virgulino silva",
   email: "virgulino.silva@example.com",
   dateStr: "Joined 03/18/11"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
   name: "lucile bertrand",
   email: "lucile.bertrand@example.com",
   dateStr: "Joined 06/13/16"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
   name: "elsa lahti",
   email: "elsa.lahti@example.com",
   dateStr: "Joined 04/15/12"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
   name: "soline leclercq",
   email: "soline.leclercq@example.com",
   dateStr: "Joined 05/12/14"
}, {
   avatar: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
   name: "henri kruse",
   email: "henri.kruse@example.com",
   dateStr: "Joined 05/14/13"
}];

//the page div, parent of all
let parentDiv = document.getElementsByClassName('page')[0];

/**
 * The function that displays elements based on the current page index
 * @param {the element list} list 
 * @param {index of pagination page} page 
 */
const showPage = (list, page) => {
   var studentList = document.createElement('ul');
   studentList.className = "student-list";

   var startIndex = (page) * numberOfItemsPerPage;
   var endIndex = startIndex + (numberOfItemsPerPage - 1);
   if (endIndex > (list.length - 1)) {
      endIndex = list.length - 1;
   }

   for (let i = startIndex; i < endIndex; i++) {
      var studentListItem = document.createElement('li');
      studentListItem.className = "student-item cf";

      var studentDetailDiv = document.createElement('div');
      studentDetailDiv.className = "student-details";
      var studentDetailDivImg = document.createElement('img');
      studentDetailDivImg.className = "avatar";
      studentDetailDivImg.src = list[i].avatar;
      studentDetailDiv.appendChild(studentDetailDivImg);
      var studentDetailDivh3 = document.createElement('h3');
      studentDetailDivh3.innerText = list[i].name;
      studentDetailDiv.appendChild(studentDetailDivh3);
      var studentDetailDivSpan = document.createElement('span');
      studentDetailDivSpan.className = "email";
      studentDetailDivSpan.innerText = list[i].email;
      studentDetailDiv.appendChild(studentDetailDivSpan);
      studentListItem.appendChild(studentDetailDiv);

      var joinedDetailDiv = document.createElement('div');
      joinedDetailDiv.className = "joined-details";
      var joinedDetailDivSpan = document.createElement('span');
      joinedDetailDivSpan.className = "date";
      joinedDetailDivSpan.innerText = list[i].dateStr;
      joinedDetailDiv.appendChild(joinedDetailDivSpan);
      studentListItem.appendChild(joinedDetailDiv);

      studentList.appendChild(studentListItem);
   }
   parentDiv.appendChild(studentList);
}

/**
 * Generates and adds functionality to the pagination buttons.
**/
const appendPageLinks = () => {
   var paginationDiv = document.createElement('div');
   paginationDiv.className = "pagination";
   var listUl = document.createElement('ul');
   listUl.className = "paginationList";
   listUl.id = "paginationList";

   let numberOfPages = Math.floor(list.length / numberOfItemsPerPage);
   for (let i = 0; i < numberOfPages; i++) {
      console.log(numberOfPages);
      var elemA = document.createElement('a');
      elemA.href = "#";
      elemA.innerText = i + 1;
      if (i == 0) {
         elemA.className = "active";
      }
      var listItem = document.createElement('li');
      listItem.appendChild(elemA);
      listUl.appendChild(listItem);
   }
   paginationDiv.appendChild(listUl);
   parentDiv.appendChild(paginationDiv);

   document.getElementById("paginationList").addEventListener("click", function (e) {
      if (e.target) {
         cleanPage();
         e.target.className = "active";
         showPage(list, parseInt(e.target.text));
      }
   });
   showPage(list, 0);
}
const cleanPage = () => {
   //remove active from all pagination list items, will be added for the clicked item later
   var activeListElem = document.getElementsByClassName("active")[0];
   activeListElem.classList.remove("active");
   //clean the student list
   parentDiv.removeChild(parentDiv.lastChild);
}

appendPageLinks(list);
