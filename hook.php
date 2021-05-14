<?php 

 function sunset_load_admin_scripts( $hook ) {
   /*
   ==============================================================================================================
   This $hook variable Represent the main magic Which Carry the distinguished Hook name of each pages or subpages
   simply You can use print_r or var_dump function to know the $hook relevant resume like 
        var_dump($hook);
        exit;  OR
        echo $hook;
        exit;
    In below $hook referred the name of the page is toplevel_page_theme-options
   ==============================================================================================================
   */
    if('toplevel_page_theme-options' != $hook) {
       return;
    }
    wp_register_style( 'sunset_admin', get_template_directory_uri() . '/css/sunset.admin.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( 'sunset_admin' );

    wp_register_script( 'sunset-admin-script', get_template_directory_uri() . '/js/sunset.admin.js', array('jquery'), '1.0.0', true );
    wp_enqueue_script('sunset-admin-script');

 }
 add_action( 'admin_enqueue_scripts', 'sunset_load_admin_scripts' );
