jQuery(function(){}),function(){var container,button,menu;if(container=document.getElementById("site-navigation"),container&&(button=container.getElementsByTagName("h1")[0],"undefined"!=typeof button)){if(menu=container.getElementsByTagName("ul")[0],"undefined"==typeof menu)return void(button.style.display="none");-1===menu.className.indexOf("nav-menu")&&(menu.className+=" nav-menu"),button.onclick=function(){-1!==container.className.indexOf("toggled")?container.className=container.className.replace(" toggled",""):container.className+=" toggled"}}}(),$(document).ready(function(){});