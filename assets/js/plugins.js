// @fileRef top.js
$(document).ready(function(){initTopButton();});function initTopButton(){var $=jQuery;$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#back-top').fadeIn();}else{$('#back-top').fadeOut();}});$('#back-top a').click(function(){$('body,html').animate({scrollTop:0},800);return false;});});};var headerView=function(){var scroll=$(window).scrollTop();if(scroll<=115){$("body").removeClass("compact");}
else{$("body").addClass("compact");}}
headerView();$(window).scroll(function(){headerView();});
