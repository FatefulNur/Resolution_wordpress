/*
=========================================================================================================================================
simply copy and paste this code into 
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

            $('#profic-preview').css('background-image', 'url(' + attachment.url + ')');
        });
        mediaUploader.open();

    });

    // Name, Descriptions live preview
    $('#first-name, #last-name, #describe').on('keyup', function () {
        var fName = $('#first-name').val();
        var lName = $('#last-name').val();
        var fullName = fName + ' ' + lName;
        var describe = $('#describe').val();
        $('#name').text(fullName);
        $('#desc').text(describe);
    });
});
