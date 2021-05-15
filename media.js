/*
=========================================================================================================================================
simply copy and paste this code into your function.php file. 

But remember one important thing. Don't forget to enqueue the wp_enqueue_media() function in function.php file & admin_enqueue_scripts
hook, given below for example::

<?php 

 function sunset_load_admin_scripts() {

    wp_enqueue_media(  );

    wp_register_script( 'sunset-admin-script', get_template_directory_uri() . '/js/sunset.admin.js', array('jquery'), '1.0.0', true );
    wp_enqueue_script('sunset-admin-script');

 }
 add_action( 'admin_enqueue_scripts', 'sunset_load_admin_scripts' );
 
 ?>
 
=========================================================================================================================================
*/

jQuery(document).ready(function ($) {
    var mediaUploader;
    $('#upload-button').on('click', function (e) {
        e.preventDefault();
        if (mediaUploader) {
            mediaUploader.open();
            return;
        }

        mediaUploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Your Profile',
            button: {
                text: 'Choose Picture'
            },
            multiple: false
        });

        mediaUploader.on('select', function () {
            var attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#profile_pic').val(attachment.url);
        });
        mediaUploader.open();

    });

});
