<?php
/*
Plugin Name: Trust in Google Links
Plugin URI: http://aramzs.me
Description: Trust in Google Links. Obey. 
Version: 0.0.1
Author: Aram Zucker-Scharff
Author URI: http://aramzs.me
License: GPL2
*/

function trust_in_google_by_adding_admin_scripts(){
    wp_register_script('trust-in-google-results', plugins_url('/', __FILE__) . 'assets/js/tigl.js', array( 'jquery' ));
    wp_enqueue_script('trust-in-google-results');
}

add_action( 'admin_enqueue_scripts', 'trust_in_google_by_adding_admin_scripts' );

function get_lucky_with_google(){
    ob_start();
    $url = $_POST['google_lucky_url'];

    #http://motyar.blogspot.com/2011/08/get-first-link-in-google-search-for.html
    
    //Get the headers
    $headers = get_headers($url, 1);
    //The url for redirect
    $url = $headers['Location'];

			$response = array(
				'what' => 'link',
				'action' => 'get_lucky_with_google',
				'id' => 1,
				'data' => $url,
				'supplemental' => array(
					'origin' => $url,
					'buffered' => ob_get_contents()
				)
			);
			$xmlResponse = new WP_Ajax_Response($response);
			$xmlResponse->send();
		ob_end_flush();
    
}


add_action( 'wp_ajax_get_lucky_with_google', 'get_lucky_with_google' );