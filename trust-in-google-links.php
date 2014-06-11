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