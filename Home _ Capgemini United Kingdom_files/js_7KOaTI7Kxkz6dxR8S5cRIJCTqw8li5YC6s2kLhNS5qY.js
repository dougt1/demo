/**
 * @file
 * A JavaScript file for the country choice system in the footer.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
(function($) {
  Drupal.behaviors.country_choice = {};  
  Drupal.behaviors.country_choice.attach = function(context) {
    $('fieldset#edit-filters .fieldset-wrapper').append($('.form-item-user-search').detach());
    $('#country-choise-select').change(function(event){
      // Prevent default click action.
      event.preventDefault();
      document.location.href = "http://" + $('#country-choise-select option:selected').val();
    });
    
    var $block_countries = $("#block-cap-custom-footer-countries");
    
    $block_countries.unbind('click').click( function() {
      // Check whether it is already loading.
      if(!$block_countries.hasClass('toggle')) {
        $block_countries.addClass('toggle');
        // builds the url to add one to the sharing counter of the current node.
        var url = Drupal.settings.basePath + 'country_choice';
        $.ajax({
          url: url,
          async: true,
          success: function(data) {
            // Append the content received then display it with a slidedown animation.
            $("#footer").append(data);
            
            // Put things back the way they were before the popup poped up.
            $(".footer-popup-closing-button").click( function() {
                $("#footer-menu-popup-wrapper").remove();
                $block_countries.removeClass('toggle');
            });
          }
        });
      }
    });
  }
})(jQuery);
;
// Insert Facebook & Twitter API scripts.
(function(d, s) {
  var js = d.getElementsByTagName(s);
  var fjs = js[js.length - 1];
  if (!d.getElementById("facebook-jssdk")) {
/*    js = d.createElement(s);
    js.id = "facebook-jssdk";
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs.nextSibling);*/
    window.fbAsyncInit = function() {
          FB.init({
              appId      : '178166639000331', // App ID from the App Dashboard
              status     : true, // check the login status upon init?
              cookie     : true, // set sessions cookies to allow your server to access the session?
              xfbml      : true  // parse XFBML tags on this page?
          });
    };
    (function(d, debug){
       var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement('script'); js.id = id; js.async = true;
       js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
       ref.parentNode.insertBefore(js, ref);
    }(document, /*debug*/ false));
  }
  if (!d.getElementById("twitter-wjs")) {
    js = d.createElement(s);
    js.id = "twitter-wjs";
    js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs.nextSibling);
  }
}(document, "script"));
;
/**
 * @file
 * Contains the general javascript of new menu navigation.
 *
 */
(function($) {
  $(document).ready(function(){
    if (Drupal.settings.cap_navigation_new_cache_build) {
      if(!$('div#page').hasClass('cap-new-nav-body') ){
        $(".close-cross-button img").trigger( "click" ) ;
      }
      // Execute all ajax clicks to build menu cache.
      $(".block-cap-navigation").find(".megamenu-parent").each(function(){
        $(this).trigger('click');
      });
      if(!$(".block-cap-navigation li").hasClass('current-parent-selected')){
        $('.block-cap-navigation').find('li:first').addClass('current-parent-selected');
      }
      $(".form-item-search-block-form .apachesolr-autocomplete").attr("autocomplete", "off");
    }
    $(".new-nav-menu-link").click(function() {
      $(this).toggleClass("new-nav-menu-link-close new-nav-menu-link-open");
      if($("#megamenu").hasClass("show-menu")) {
        $(".close-cross-button img").trigger( "click" );
        $("#megamenu").slideUp('slow');
      }
      else {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        if (parseInt($("#megamenu-content-container").css('height'), 10) > 0) {
          $(".block-cap-navigation").find(".megamenu-parent").each(function(){
            $(this).removeClass('opened');
          });
          $("#megamenu-content-container").removeAttr('style');
          $("#megamenu-content-container").css('display', 'none');
        }
        if(!$(this).hasClass('new-nav-menu-once-force-opned-check')) {
          $(".block-cap-navigation").find(".current-parent-selected").each(function(){
            $(this).children('a').trigger('click');
            $("#megamenu-content-container").css('display', 'block');
          });
          $(this).addClass('new-nav-menu-once-force-opned-check');
        }
       $("#megamenu").slideDown('slow');
      }
      $("#megamenu").toggleClass("hide-menu show-menu");
    });
  });
  Drupal.behaviors.newnavDisplayRight = {};
  Drupal.behaviors.newnavDisplayRight.attach = function (context, settings) {
    $(".view-display-id-blog_article_list_block_author").find(".views-row").each(function( index ) {
      if (!$(this).hasClass('views-row-1')) {
        $(this).find('.author-info').css('display', 'none');
        $(this).find('.post-info').css('width', '99%');
        $(this).find('.post-header').css('width', '99%');
        $(this).find('.hentry-content').css('width', '99%');
		var comment_count = parseInt($(this).find('.bubble-count').text() + '');
		var comment_disp = 'comment';
		if (comment_count > 0) {
		  if (comment_count > 1) {
		    comment_disp = 'comments';
		  }		  
		  $(this).find('.read-more').html($(this).find('.read-more').html() + '&nbsp;(' + comment_count  + '&nbsp;' + comment_disp + ')');
		}
      }
    });
    $(".new-nav-left-link-text").live('mouseover', function() {
      if(navigator.userAgent.match(/iPad/i)) {
        $(this).attr('href', '#');
      }
    });
    $(".new-nav-left-link-text").live('click', function() {
      if (!$(this).hasClass('mobile-main-menu') && !$(this).hasClass('mobile-sub-menu') ) {
        $('.megamenu-link-text').removeClass('active');
        $(this).children('.megamenu-link-text').addClass('active');
        var child_data = $(this).children('.megamenu-link-text').attr('class').split(' ');
        var counter = 0;
        $('#megamenu-content-html .right-span-child-divs').removeClass('hide-content');
        $('#megamenu-content-html .right-span-child-divs').removeClass('show-content');
        $('#megamenu-content-html .right-span-child-divs').addClass('hide-content');
        for(counter = 0; counter < child_data.length; counter++) {
          if(child_data[counter] != 'megamenu-link-text' && child_data[counter] != 'active' && child_data[counter] != 'hide-content' && child_data[counter] != 'show-content') {
            $('#megamenu-content-html').find('.right-span .'+child_data[counter]).removeClass('hide-content');
            $('#megamenu-content-html').find('.right-span .'+child_data[counter]).addClass('show-content');
          }
        }
      }
    });
    $(".cap-new-nav-megamenu-mobile .mobile-main-menu").live('click', function() {
      $('.cap-new-nav').find('.current-content').removeClass('show-content');
      $('.cap-new-nav').find('.current-content').removeClass('hide-content');
      $('.cap-new-nav').find('.current-content').addClass('hide-content');
      $(this).next('.current-content').toggleClass('hide-content show-content');
    });
    $('.mobile-sub-menu').live('click', function() {
      var class_data = $(this).children('.megamenu-link-text').attr('class').split(' ');
      var class_counter = 0;
      for(class_counter = 0; class_counter < class_data.length; class_counter++) {
        if(class_data[class_counter] != 'megamenu-link-text' && class_data[class_counter] != 'active') {
          var cur_class = $(this).next('div').attr('class').split(' ');
          var class_check_counter = 0;
          $('.mobile-sub-menu').next('div').removeClass('show-content');
          $('.mobile-sub-menu').next('div').removeClass('hide-content');
          $('.mobile-sub-menu').next('div').addClass('hide-content');
          $(".new-nav-menu-additional-expand").removeClass('show-content');
          $(".new-nav-menu-additional-expand").removeClass('hide-content');
          $(".new-nav-menu-additional-expand").addClass('show-content');
          for(class_check_counter = 0; class_check_counter < cur_class.length; class_check_counter++) {
            if(cur_class[class_check_counter] == 'show-content' || cur_class[class_check_counter] == 'hide-content') {
              $(this).next('div').removeClass('show-content');
              $(this).next('div').removeClass('hide-content');
              $(this).next('div').addClass(cur_class[class_check_counter]);
            }
          }
          $(this).next('div').toggleClass('hide-content show-content');
          $("html, body").animate({ scrollTop: $(this).offset().top }, "fast");
        }
      }
    });
    $(".new-nav-menu-search").live('keypress', function( event ) {
      if ( event.which == 13 ) {
        var id_parts = $(this).attr('data-id').split('new-nav-menu-search-');
        var search_items = id_parts[id_parts.length - 1].split('___');
        var lang = search_items[search_items.length - 1];
        var types = search_items[0].split('-');
        var search_url = '/global_search/' + event.currentTarget.elements[0].value + '%20type:' + types.join() + '%20language:' + lang;
        window.location.href = search_url;
        return false;
      }
    });
    $(".new-nav-select-redirect-to-options").live('change', function() {
       window.location.href = $(this).find('option:selected').val();
    });
    $(".career_search input").live('keypress', function( event ) {
      if ( event.which == 13 ) {
         window.location.href = '/jobs/search/'+$(this).val();
        return false;
     }
    });
    $(".new-nav-menu-additional-expand").live('click', function() {
      var class_parts = $(this).attr('data-id').split("-");
      $("." + class_parts[0]).toggleClass('show-content hide-content');
      $("div." + $(this).attr('data-id')).toggleClass('show-content hide-content');
      if ($(this).hasClass('new-nav-mobile-specific-menu')) {
        $("html, body").animate({ scrollTop: $("div." + $(this).attr('data-id')).offset().top }, "fast");
      }
    });
    $(".new-nav-menu-additional-reduce").live('click', function() {
      var class_parts_red = $(this).attr('data-id').split("-");
      $("." + class_parts_red[0]).addClass('show-content');
      $("." + class_parts_red[0]).removeClass('hide-content');
      $("div." + $(this).attr('data-id')).toggleClass('show-content hide-content');
      if ($(this).hasClass('new-nav-mobile-specific-menu')) {
        $("html, body").animate({ scrollTop: $("div." + $(this).attr('data-id')).offset().top }, "fast");
      }
    });
    $(".serv_part li").live('mouseover', function() {
      var anc_tag = $(this).children('a');
      if (!$(this).hasClass('new-nav-tooltip-appended') && anc_tag.children('img').attr('src').toString() != '' ) {
        $(this).css('padding', '25px 25px');
        $(this).toggleClass('new-nav-tooltip-appended');
        anc_tag.append('<span class="new-nav-serv-part-tooltip" style="display:block; float:left; width:99%; height:99%; overflow:hidden;"><strong>'+ $(this).find('img').attr('title') +'</strong></span>');
        anc_tag.children('img').hide();
      }
    });
    $(".serv_part li").live('mouseleave', function() {
      $(this).removeAttr('style');
      $(this).removeClass('new-nav-tooltip-appended');
      $( ".new-nav-serv-part-tooltip" ).remove();
      $(this).find('img').show();
    });
  };
})(jQuery);
;
(function($) {

$(document).scroll(function() {
    if ($("#megamenu").hasClass("cap-new-nav")) {   
       
if ($(this).scrollTop() > 2) { 
       
        $('#block-cap-navigation-sub-menu').css('position','fixed');
        $('#block-cap-navigation-sub-menu').css('top','90px');
        $('#block-cap-navigation-sub-menu').css('z-index','800');
      } 
    else {
        $('#block-cap-navigation-sub-menu').css('position','static');
    }
  }
});

})(jQuery);
;
// $Id: contentanalysis.js,v 1.1.2.7 2010/11/09 21:50:14 tomdude48 Exp $
var contentanalysis = contentanalysis || {};

(function ($, $$) {
	$.extend($$, {
		contentanalysisPrevAnalyzerTab: '',
		contentanalysisPrevReportTab: '',
		contentanalysisCurrentAnalyzerTab: '',
		contentanalysisCurrentReportTab: '',
		contentanalysisReportActiveTab: {},
		
		init: function() {
			$$.contentanalysis_contentanalysisui();
		},
		
		contentanalysis_contentanalysisui: function() {
		    if($('#modalContent div.analyzers h3.analyzer').size() > 0) {
		        $$.contentanalysis_show_analyzer_tab($('div.analyzers h3.analyzer').get(0));
		        $('div.analyzers h3.analyzer').mousedown(function () {
		        	$$.contentanalysis_show_analyzer_tab(this);
		        }) 
		        $('h3.contentanalysis-report-tab').mousedown(function () { 
		        	$$.contentanalysis_show_report_tab(this);
		        })
		    }	
		},

		contentanalysis_back: function() {
			$$.contentanalysis_show_analyzer_tab(contentanalysisPrevAnalyzerTab);
		  //contentanalysis_show_report_tab(contentanalysisPrevReportTab);
		},

		contentanalysis_show_analyzer_tab: function (theTab){
		  $('div.analysis-results div.analyzer-analysis:eq(' + $('.analyzers h3.analyzer').index(theTab) + ')').children('.content-analysis-tab:first').addClass('active');
		  $('div.analysis-results div.analyzer-analysis').hide();
		  $('.analyzers h3.analyzer').removeClass('active');
		  $(theTab).addClass('active');
		  $('div.analysis-results div.analyzer-analysis:eq(' + $('.analyzers h3.analyzer').index(theTab) + ')').show();
		  $('.content-analysis-results').hide();
		
		  var id = $(theTab).attr('id');
		  var e = id.split('-');
		  var analyzer = e[3];
		  
		  if($$.contentanalysisReportActiveTab[analyzer]) {
		    $$.contentanalysis_show_report_tab($('#contentanalysis-report-tab-' + analyzer + '-' + $$.contentanalysisReportActiveTab[analyzer]));
		  }
		  else {
		    $$.contentanalysis_show_report_tab($('#contentanalysis-report-tab-' + analyzer + '-0'));
		  }
		  $$.contentanalysisPrevAnalyzerTab = $$.contentanalysisCurrentAnalyzerTab;
		  $$.contentanalysisCurrentAnalyzerTab = theTab;  
		},

		contentanalysis_show_report_tab: function (theTab){
		  var id = $(theTab).attr('id');
		  var e = id.split('-');
		  $$.contentanalysisReportActiveTab[e[3]] = e[4];
		  $('h3.contentanalysis-report-tab').removeClass('active');  
		  $(theTab).addClass('active');
		  $('.contentanalysis-results-section').hide();
		
		  var tabs = $("#contentanalysis-report-tabs-" + e[3]);
		  //tabs.css('border','2px solid red');
		  var pos = $("#contentanalysis-report-tabs-" + e[3]).position(); 
		  var offset = $("#contentanalysis-report-tabs-" + e[3]).offset(); 
		  var height = tabs.height();
		  var top = (pos.top+height)+"px";
		  var left = (pos.left)+"px";
		  
		  var sec_id = id.replace('tab', 'results');
		  var result_id = sec_id.replace('-'+e[4],'')
		  //$('#' + result_id).css({'top': top, 'left': left}); 
		  $('#' + result_id).css('top', top); 
		  //$('#' + result_id).css('border', '2px solid green'); 
		  $('#' + sec_id).show();
		//alert("pos.left="+pos.left+",pos.top="+pos.top+",offset.left="+offset.left+",offset.top="+offset.top);
		  $$.contentanalysisPrevReportTab = $$.contentanalysisCurrentReportTab;
		  $$.contentanalysisCurrentReportTab = theTab; 
		},

		// called from inline Analyze content button
		contentanalysis_inline_analysis: function() {
		  Drupal.settings.contentanalysis.display_dialog = 0;
		  Drupal.settings.contentanalysis.display_inline = 1;
		  //$('#contentanalysis-ininline-analysis-button').after('<span class="throbber">Loading...</span>');
		  //$('#contentanalysis-ininline-analysis-button').after(Drupal.settings.contentanalysis.throbber);
		  $('#contentanalysis-buttons').after('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">' + Drupal.t('Analyzing...') + '</div></div>');
		  $$.contentanalysis_analyze();
		},

		// called from inline Analyze content button
		contentanalysis_dialog_analysis: function() {
		  Drupal.settings.contentanalysis.display_dialog = 1;
		  Drupal.settings.contentanalysis.display_inline = 0;
		  $$.contentanalysis_analyze();
		},

		// called from inline Analyze content button
		contentanalysis_full_analysis: function() {
		  Drupal.settings.contentanalysis.display_dialog = 1;
		  Drupal.settings.contentanalysis.display_inline = 1;
		  
		  $$.contentanalysis_analyze();
		},

		// called from inline Analyze content button
		contentanalysis_refresh_analysis: function(analyzer) {
		  Drupal.settings.contentanalysis.display_dialog = 0;
		  Drupal.settings.contentanalysis.display_inline = 1;
		  //$('.contentanalysis-refresh-link-' + analyzer).replaceWith('<span class="throbber">Loading...</span>');
		  $('.contentanalysis-refresh-link-' + analyzer).replaceWith('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
		  $$.contentanalysis_analyze(analyzer);
		},

		contentanalysis_analyze: function(analyzer_override) {
		  // if TinyMCE is used, turn off and on to save body text to textarea
		  var data = { 
		    'nid': -1,
		    'node_type': -1,
		    'source': -1,
		    'analyzers':-1,
		    'title': -1, 
		    'body': -1,
		    'body_summary': -1,
		    'page_title':-1, 
		    'meta_title':-1,
		    'meta_keywords':-1, 
		    'meta_description':-1,
		    'path_alias': -1,
		    'path_pathauto': -1,
		    'url': -1,
		    'page': -1,
		    'body_input_filter': -1,
		    'hidden': -1,    
		    'code': Drupal.settings.contentanalysis.code,
		    'action': -1
		  };
		  if(analyzer_override) {
		    data.action = 'refresh';
		  }
		  if ($('#contentanalysis-page-analyzer-form').html()) {
		    data.source = 'admin-form';
		    data.body = $('[name=input]').val()
		    data.nid = $('[name=input_nid]').val()
		    data.url = $('[name=input_url]').val()
		    if(data.body == '') {
		      data.body = -1;
		    }
		    if(data.nid == '') {
		      data.nid = -1;
		    }
		    if(data.url == '') {
		      data.url = -1;
		    }    
		  } else if ($('.node-form').html()) {
		    data.source = 'node-edit-form';
		    // Turn off TinyMCE if enabled
		    if(typeof tinyMCE == 'object') {
		    	tinyMCE.get('edit-body-und-0-value').hide();
		    }
		    // Turn off CKEditor if any.
		    var ckeditor = false;
		    if ($('#cke_edit-body-und-0-value').html()) {
		      $('#wysiwyg-toggle-edit-body-und-0-value').click();
		      ckeditor = true;
		    }
		
		    data.title = $('#edit-title').val();
		    data.body = $('#edit-body-und-0-value').val();
		    if ($('#edit-body-und-0-summary').val() != null) {
		      data.body_summary = $('#edit-body-und-0-summary').val();
		    } 
		    data.nid = Drupal.settings.contentanalysis.nid
		    data.node_type = Drupal.settings.contentanalysis.node_type
		    data.body_input_filter = $("select[name='body[und][0][format]'] option:selected").val();
		    
		    if ($('#edit-page-title').val() != null) {
		      data.page_title = $('#edit-page-title').val();
		    }    
		    // check if metatag module fields exist
		    if ($('#edit-metatags-title-value').val() != null) {
		      data.meta_title = $('#edit-metatags-title-value').val();
		    }
		    if ($('#edit-metatags-keywords-value').val() != null) {
		      data.meta_keywords = $('#edit-metatags-keywords-value').val();
		    }
		    if ($('#edit-metatags-description-value').val() != null) {
		      data.meta_description = $('#edit-metatags-description-value').val();
		    }
		    if ($('#edit-path-alias').val() != null) {
		      data.url = window.location.host + Drupal.settings.contentanalysis.base_path + $('#edit-path-alias').val();
		      data.path_alias = $('#edit-path-alias').val();
		    }
		    if ($("input[name='path[pathauto]']:checked").val() != null) {
		    	data.path_pathauto = 1;
		    }
		    // Turn back on tinyMCE
		    if(typeof tinyMCE == 'object') {
		    	tinyMCE.get('edit-body-und-0-value').show();
		    }	
		    // Turn back on CKEditor if needed.
		    if (ckeditor) {
		      $('#wysiwyg-toggle-edit-body-und-0-value').click();
		    }
		
		  } else {
		    data.source = 'page-link';
		    data.page = $('html').html()  
		    data.url = window.location.href
		  }
		  if(Drupal.settings.contentanalysis.hidden != null) {
		    data.hidden = Drupal.settings.contentanalysis.hidden;
		  }
		  
		  //alert('data.nid ' + data.nid)
		  var analyzers_arr = new Array();
		  if(analyzer_override) {
		    data.analyzers = analyzer_override;
		    analyzers_arr[0] = data.analyzers; 
		  }
		  else if($('#contentanalysis_analyzers_override input').val() != null) {    
		    data.analyzers = $('#contentanalysis_analyzers_override input').val();
		    analyzers_arr[0] = data.analyzers;
		  } 
		  else {
		    var i = 0;
		    $('#contentanalysis_analyzers .form-checkbox:checked').each ( function () {  
		      var expr = new RegExp(/\[[^\]]+\]/);
		      analyzers_arr[i] = expr.exec($(this).attr('name'))[0].replace(']', '').replace('[','');    
		      i++;
		    })
		    data.analyzers = analyzers_arr.join(',');
		  }
		  // call contentanalysis_data for enabed analyzers
		  for(var i in analyzers_arr) {
		    var aid = analyzers_arr[i];
		    var module = Drupal.settings.contentanalysis.analyzer_modules[aid].module;
		    if (eval('typeof ' + module + '_contentanalysis_data == "function"')) {
		      d = eval(module + '_contentanalysis_data')(aid, data);
		      for(var k in d) {
		        eval('data.ao_'+aid+'_'+k+' = "'+d[k]+'";');
		      }
		    }
		  }  
		  $('#contentanalysis-buttons').hide(); 
		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.contentanalysis.analyze_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
		      analyzers_arr = data.inputs['analyzers'].split(",");
		      if(Drupal.settings.contentanalysis.display_dialog == 1) {
		        $('#analysis-modal').append(data.main['output']);
		        $('#analysis-modal .progress').remove();
		        //Drupal.behaviors.contentanalysisui();
		        $$.contentanalysis_contentanalysisui()
		      }
		      // display inline if enabled
		      if(Drupal.settings.contentanalysis.display_inline == 1) {
		        if(data.inputs['action'] == 'refresh') {
		          //if($('.contentanalysis_section_analysis').length > 0)
		          for(i in analyzers_arr) {
		            aid = analyzers_arr[i];
		            $('.contentanalysis-report-'+aid+'-page_title').replaceWith(data.page_title['output']);
		            $('.contentanalysis-report-'+aid+'-body').replaceWith(data.body['output']);
		            $('.contentanalysis-report-'+aid+'-meta_description').replaceWith(data.meta_description['output']);
		            $('.contentanalysis-report-'+aid+'-meta_keywords').replaceWith(data.meta_keywords['output']);
		          }
		        }
		        else {
		          var show_title = true;
		          if($('.form-item-metatags-title-value').length > 0) {
		            $('.form-item-metatags-title-value > .contentanalysis_section_analysis').remove();
		            $('.form-item-metatags-title-value').append(data.page_title['output']);
		            // check if metatag-title contains [node:title] token
		            if ($('#edit-metatags-title-value').val() != null) {
		              var meta_title = $('#edit-metatags-title-value').val();
		              if(meta_title.indexOf("[node:title]") == -1) {
		            	//show_title = false;
		              }
		            }
		          } 
		          if (show_title) {
		            $('.form-item-title > .contentanalysis_section_analysis').remove();
		            $('.form-item-title').append(data.page_title['output']);				
		          }
		    
		          $('#edit-body > .contentanalysis_section_analysis').remove();
		          $('#edit-body').append(data.body['output']);
		          // check newer nodewords format
		          if(($('.form-item-metatags-description-value').length > 0) && data.meta_description != null) {
		            $('.form-item-metatags-description-value > .contentanalysis_section_analysis').remove();
		            $('.form-item-metatags-description-value').append(data.meta_description['output']);
		          }
		          
		          if(($('.form-item-metatags-keywords-value').length > 0) && data.meta_keywords != null) {
		            $('.form-item-metatags-keywords-value > .contentanalysis_section_analysis').remove();
		            $('.form-item-metatags-keywords-value').append(data.meta_keywords['output']);
		          }
		        }
		        for(var i in analyzers_arr) {
		          var aid = analyzers_arr[i];
		          h = '<a href="#" class="contentanalysis-refresh-link-' + aid + '" onclick="contentanalysis.contentanalysis_refresh_analysis(\'' + aid + '\'); return false;">';
		          h += '<img src="' + Drupal.settings.contentanalysis.path_to_module + '/icons/refresh.png" alt="refresh" />';
		          h += '</a>';
		          $('.contentanalysis-report-' + aid + ' label').append(h);
		        } 
					}      
		      // call any modules post analysis hooks      
		      for(var i in analyzers_arr) {
		        var aid = analyzers_arr[i];        
		        var module = Drupal.settings.contentanalysis.analyzer_modules[aid].module;     
		        if (eval('typeof ' + module + '_contentanalysis_analysis_success == "function"')) {
		          eval(module + '_contentanalysis_analysis_success')(aid, data);
		        }
		      } 
		      if(typeof Drupal.behaviors.collapse == 'function') {
		    	  Drupal.behaviors.collapse();  
		      }
		      $('.ahah-progress-throbber').remove();
		      $('#contentanalysis-buttons').show();
		    },
		    error: function(xhr, status) {
		      alert(xhr.responseText.toString());
		      $('.ahah-progress-throbber').remove();
		      $('#contentanalysis-buttons').show();
		    }
		  });
		  return false;	
		}
	});	

	Drupal.behaviors.contentanalysisui = {
	  attach: function (context, settings) {
		$$.init();
	  }
	};
	
	Sliders = {};
	
	Sliders.changeHandle = function(e,ui) {
	  var id = jQuery(ui.handle).parents('div.slider-widget-container').attr('id');
	  if (typeof(ui.values) != 'undefined') {
	    jQuery.each(ui.values, function(i,val) {
	      jQuery("#"+id+"_value_"+i).val(val);
	      jQuery("#"+id+"_nr_"+i).text(val);
	    });
	  } else {
	    jQuery("#"+id+"_value_0").val(ui.value);
	    jQuery("#"+id+"_nr_0").text(ui.value);
	  }
	};

})(jQuery, contentanalysis);
;
var contentoptimizer_contentanalysis_data = function(aid) {		
  data = new Array();	
  data['keyword'] = document.getElementById('edit-seo-keyword').value;	
  return data;
};
/*!
Megamenu.js

Manage megamenu display.
*/

(function ($) {
  Drupal.behaviors.megamenu = {
    attach: function (context, settings) {
      function cap_navigation_new_checkBrowser(){
          c=navigator.userAgent.search("Chrome");
          f=navigator.userAgent.search("Firefox");
          m8=navigator.userAgent.search("MSIE 8.0");
          m9=navigator.userAgent.search("MSIE 9.0");
          var brwsr = 0;
          if (c>-1){
              brwsr = 1;
          }
          else if(f>-1){
              brwsr = 0;
          }else if (m9>-1){
              brwsr =0;
          }else if (m8>-1){
              brwsr =0;
          }
          return brwsr;
      }
      function cap_navigation_new_checkDevice(){
        if(navigator.userAgent.match(/iPad/i)) {
          console.log('on ipad only');
          $('.new-nav-left-link-text').attr('href', '#');
        }
      }
      cap_navigation_new_checkDevice();
      if (!Drupal.settings.cap_navigation_new_cache_build || !cap_navigation_new_checkBrowser()) {
      // Bind a click event on a Megamenu element.
        $(".megamenu-parent").unbind("click").click(function (event) {
          // Prevent default click action.
          event.preventDefault();
          menu_click_behaviour_checks($(this));
        });
      }
      else {
        $(".megamenu-parent").live('click', function() {
          menu_click_behaviour_checks($(this));
          // Prevent default click action.
          event.preventDefault();
        });
      }
      function menu_click_behaviour_checks(submenu) {
          // Go to the top of the screen.
          $("html, body").animate({ scrollTop: 0 }, "fast");

          /*var submenu = $(this);*/
          var displaying_content = false;
          var machine_name = submenu.attr("data-machine-name");
          var href_megamenu = submenu.attr("href");

          // If the current submenu has allready 'opened' class: do nothing.
          if (submenu.hasClass("opened")) {
              slideUpAnimate();
          }
          else if ($("#megamenu-content-container").hasClass("new_sub_menu_opened")) {
            $(".megamenu-parent").removeClass("opened");
            submenu.addClass("opened");
            $("#megamenu-content-html").html('');
            $("#megamenu-content-html").hide();
            // If this megamenu is not allready loaded.
            if (!submenu.hasClass("megamenu-loaded")) {
              // Display the ajax loader.
              $("#megamenu-content").css('min-height', '80px');
              $("#megamenu-loading").show();
              $("#megamenu-content-container").ready(function() {
                // Call the menu item megamenu/% to get the sublinks.
                $.ajax({
                  url: href_megamenu,
                  async: false,
                  // If successed: add the content returned to the div wrapper.
                  success: function(data) {
                    displaying_content = true;
                    // Hide the ajax loader.
                    $("#megamenu-loading").hide();
                    submenu.addClass("megamenu-loaded");
                    // Append the content received then display it with a slidedown animation.
                    $("#megamenu #megamenu-content-hidden").append(data);
                    slideDownAnimate(machine_name, true);
                  }
                });
              });
            }
            else {
              slideDownAnimate(machine_name);
            }
          }
          else {
            if (machine_name != "") {
              // Remove all the class 'active' of the Megamenu.
              $(".megamenu-parent").removeClass("opened");
              $("#megamenu-content-container").removeClass("new_sub_menu_opened");
              submenu.addClass("opened");
              $(document).ready(function() {
                if ($("#page").hasClass("cap-new-nav-body")) {
                   $('.sub_menu').click(function(e) {
                     $("#megamenu-content-container").addClass("new_sub_menu_opened");
                  });
                 }
               });

              // Hide the previous displayed content.
              $("#megamenu-content-container").slideUp('slow', function() {
                $("#megamenu-content-html").html('');
                $("#megamenu-content-html").hide();
                // If this megamenu is not allready loaded.
                if (!submenu.hasClass("megamenu-loaded")) {
                  // Display the ajax loader.
                  $("#megamenu-content").css('min-height', '80px');
                  $("#megamenu-loading").show();
                  $("#megamenu-content-container").slideDown('slow', function() {
                    // Call the menu item megamenu/% to get the sublinks.
                    $.ajax({
                      url: href_megamenu,
                      async: false,
                      // If successed: add the content returned to the div wrapper.
                      success: function(data) {
                        displaying_content = true;
                        // Hide the ajax loader.
                        $("#megamenu-loading").hide();
                        submenu.addClass("megamenu-loaded");
                        // Append the content received then display it with a slidedown animation.
                        $("#megamenu #megamenu-content-hidden").append(data);
                        slideDownAnimate(machine_name, true);
                      }
                    });
                  });
                }
                else {
                  slideDownAnimate(machine_name);
                }
              });
            }
          }
      }
      // Catch the click on a close cross button.
      $("#megamenu #megamenu-content-container .close-cross-button img").click(function () {
        slideUpAnimate();
      });
    }
  };

  // Hide the megamenu.
  slideUpAnimate = function () {
    // Hide the previous displayed content.
    $("#megamenu-content-container").slideUp('slow', function() {
      // Remove all the class 'active' of the Megamenu.
      $(".megamenu-parent").removeClass("opened");
    });
  }

  // Show the megamenu required.
  slideDownAnimate = function (machine_name, ajax_requested) {
    var content_to_display = $("#megamenu #megamenu-content-hidden #megamenu-" + machine_name).html();
    if (content_to_display != null) {
      $("#megamenu-content-html").html(content_to_display);
      if (!ajax_requested) {
        $("#megamenu-content").css('min-height', '1px');
      }
        $("#megamenu-content-container").show();

       if ($("#megamenu-content-container").hasClass("new_sub_menu_opened")) {
          $("#megamenu-content-html").show();
          }
       else {
        $("#megamenu-content-html").slideDown('slow');
        }
    }
    else {
      slideUpAnimate();
    }
  };
})(jQuery);
;
/*!
message.js

Manage to display messages on select menu-item change.
*/
(function ($) {
  Drupal.behaviors.navigationMessage = {
    attach: function (context, settings) {
      var menuItem = $("#edit-menu-item-id").val();
      if (menuItem != '') {
        $("#edit-menu-item-id").change(function () {
          var message = Drupal.t(
            "/!\ Beware: you have changed the associated menu item." + "\n" + "\n" + 
            "If you want to change the associated URL you have to do the following steps:" + "\n" + 
            "  1/ In 'URL pass settings', clear the field," + "\n" + 
            "  2/ Check 'Generate automatic URL alias'," + "\n" + 
            "  3/ Submit the modification." + "\n" + "\n" +  
            "Do you want to continue?"
            );
          if (!confirm(message)) {
            $("#edit-menu-item-id").val(menuItem);
          }
        });
      }
    }
  }
})(jQuery);;
(function ($) {
  $(document).ready(function() {
    $('#edit-workflow-countries-checkboxes-tier-1-tier1').click(function(event) {
      if(this.checked) {
        $('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox').each(function() {
          this.checked = true;           
        });
      } 
      else {
        $('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox').each(function() {
          this.checked = false;                    
        });         
      }
    });

    $('#edit-workflow-countries-checkboxes-tier-2-tier2').click(function(event) {
      if(this.checked) {
        $('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox').each(function() {
          this.checked = true;           
        });
      } 
      else {
        $('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox').each(function() {
          this.checked = false;                    
        });         
      }
    });

    $('#edit-workflow-countries-checkboxes-tier-3-tier3').click(function(event) {
      if(this.checked) {
        $('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox').each(function() {
          this.checked = true;           
        });
      } 
      else {
        $('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox').each(function() {
          this.checked = false;                    
        });         
      }
    });

    $('#edit-workflow-countries-checkboxes-cc-tiercc').click(function(event) {
      if(this.checked) {
        $('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox').each(function() {
          this.checked = true;           
        });
      } 
      else {
        $('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox').each(function() {
          this.checked = false;                    
        });         
      }
    });
    $('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-tier-1-tier1")').click(function(event) {
      var checkedCount = 0;      
      var chkHeader = document.getElementById('edit-workflow-countries-checkboxes-tier-1-tier1');
      var length_of_cc_checkboxes = $('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox').length;
      for (var i = 0; i < $('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox').length; i++) {
        if ($('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox')[i].checked) {
          checkedCount += 1;
        }
      }
      if (chkHeader.checked) {
        checkedCount = checkedCount - 1;
      }
      length_of_cc_checkboxes = length_of_cc_checkboxes - 1;
      chkHeader.checked = (checkedCount === $('#edit-workflow-countries-checkboxes-tier-1 .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-tier-1-tier1")').length);
    });

    $('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-tier-2-tier2")').click(function(event) {
      var checkedCount = 0;      
      var chkHeader = document.getElementById('edit-workflow-countries-checkboxes-tier-2-tier2');
      var length_of_cc_checkboxes = $('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox').length;
      for (var i = 0; i < $('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox').length; i++) {
        if ($('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox')[i].checked) {
          checkedCount += 1;
        }
      }
      if (chkHeader.checked) {
        checkedCount = checkedCount - 1;
      }
      length_of_cc_checkboxes = length_of_cc_checkboxes - 1;
      chkHeader.checked = (checkedCount === $('#edit-workflow-countries-checkboxes-tier-2 .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-tier-2-tier2")').length);
    });
    $('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-tier-3-tier3")').click(function(event) {
      var checkedCount = 0;      
      var chkHeader = document.getElementById('edit-workflow-countries-checkboxes-tier-3-tier3');
      var length_of_cc_checkboxes = $('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox').length;
      for (var i = 0; i < $('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox').length; i++) {
        if ($('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox')[i].checked) {
          checkedCount += 1;
        }
      }
      if (chkHeader.checked) {
        checkedCount = checkedCount - 1;
      }
      length_of_cc_checkboxes = length_of_cc_checkboxes - 1;
      chkHeader.checked = (checkedCount === $('#edit-workflow-countries-checkboxes-tier-3 .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-tier-3-tier3")').length);
    });
    $('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-cc-tiercc")').click(function(event) {
      var checkedCount = 0;      
      var chkHeader = document.getElementById('edit-workflow-countries-checkboxes-cc-tiercc');
      var length_of_cc_checkboxes = $('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox').length;
      for (var i = 0; i < $('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox').length; i++) {
        if ($('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox')[i].checked) {
          checkedCount += 1;
        }
      }
      if (chkHeader.checked) {
        checkedCount = checkedCount - 1;
      }
      length_of_cc_checkboxes = length_of_cc_checkboxes - 1;
      chkHeader.checked = (checkedCount === $('#edit-workflow-countries-checkboxes-cc .form-item .form-checkbox:not("#edit-workflow-countries-checkboxes-cc-tiercc")').length);
    }); 
  });

})(jQuery);;
