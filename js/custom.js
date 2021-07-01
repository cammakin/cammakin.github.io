/*
	Author: Cameorn Makin
	Creation Date: 	07/7/2019
	Revision Date:  03/15/2021
	Comments: Custom JavaScript for personal site
			  Will close all tabs and open requested tab from button
*/

function changeProject(requestedProject){
	var requested_tab = document.getElementById(requestedProject);

	if(requested_tab.style.display == 'block')
		return;
	var all_tabs = document.getElementsByClassName("tab");
	for(var i = 0; i < all_tabs.length; i++){
		all_tabs[i].style.display = 'none';
	}
	requested_tab.style.display = 'block';
}