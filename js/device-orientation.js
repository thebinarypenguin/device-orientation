(function() {

  $(document).ready(function(){

    var win   = $(window);
    var delay = 150;


    /**
     * DeviceOrientation Event
     */
    var do_row      = $('#do-row');
    var do_support  = $('#do-support');
    var do_alpha    = $('#do-alpha');
    var do_beta     = $('#do-beta');
    var do_gamma    = $('#do-gamma');
    var do_absolute = $('#do-absolute');

    if (window.DeviceOrientationEvent) {
      do_row.addClass('success');
      do_support.html('Supported');

      win.on('deviceorientation', $.throttle(delay, function(event) {
        do_alpha.html(''+event.originalEvent.alpha);
        do_beta.html(''+event.originalEvent.beta);
        do_gamma.html(''+event.originalEvent.gamma);
        do_absolute.html(''+event.originalEvent.absolute);
      }));
    } else {
      do_row.addClass('error');
      do_support.html('Not Supported');
    }


    /**
     * MozOrientation Event (obsolete)
     */
    var mo_row     = $('#mo-row');
    var mo_support = $('#mo-support');
    var mo_x       = $('#mo-x');
    var mo_y       = $('#mo-y');
    var mo_z       = $('#mo-z');

    if (window.OrientationEvent) {
      mo_row.addClass('success');
      mo_support.html('Supported');

      win.on('MozOrientation', $.throttle(delay, function(event) {
        mo_x.html(''+event.originalEvent.x);
        mo_y.html(''+event.originalEvent.y);
        mo_z.html(''+event.originalEvent.z);
      }));
    } else {
      mo_row.addClass('error');
      mo_support.html('Not Supported');
    }


    /**
     * DeviceMotion Event
     */
    var dm_row                              = $('#dm-row');
    var dm_support                          = $('#dm-support');
    var dm_acceleration_x                   = $('#dm-acceleration-x');
    var dm_acceleration_y                   = $('#dm-acceleration-y');
    var dm_acceleration_z                   = $('#dm-acceleration-z');
    var dm_acceleration_including_gravity_x = $('#dm-acceleration-including-gravity-x');
    var dm_acceleration_including_gravity_y = $('#dm-acceleration-including-gravity-y');
    var dm_acceleration_including_gravity_z = $('#dm-acceleration-including-gravity-z');
    var dm_rotation_rate_alpha              = $('#dm-rotation-rate-alpha');
    var dm_rotation_rate_beta               = $('#dm-rotation-rate-beta');
    var dm_rotation_rate_gamma              = $('#dm-rotation-rate-gamma');

    if (window.DeviceMotionEvent) {
      dm_row.addClass('success');
      dm_support.html('Supported');

      win.on('devicemotion', $.throttle(delay, function(event) {
        dm_acceleration_x.html(''+event.originalEvent.acceleration.x);
        dm_acceleration_y.html(''+event.originalEvent.acceleration.y);
        dm_acceleration_z.html(''+event.originalEvent.acceleration.z);

        dm_acceleration_including_gravity_x.html(''+event.originalEvent.accelerationIncludingGravity.x);
        dm_acceleration_including_gravity_y.html(''+event.originalEvent.accelerationIncludingGravity.y);
        dm_acceleration_including_gravity_z.html(''+event.originalEvent.accelerationIncludingGravity.z);

        dm_rotation_rate_alpha.html(''+event.originalEvent.rotationRate.alpha);
        dm_rotation_rate_beta.html(''+event.originalEvent.rotationRate.beta);
        dm_rotation_rate_gamma.html(''+event.originalEvent.rotationRate.gamma);
      }));
    } else {
      dm_row.addClass('error');
      dm_support.html('Not Supported');
    }


    /**
     * OrientationChange Event
     */
    var oc_row         = $('#oc-row');
    var oc_support     = $('#oc-support');
    var oc_orientation = $('#oc-orientation');

    if (window.OrientationChangeEvent) {
      oc_row.addClass('success');
      oc_support.html('Supported');

      win.on('orientationchange', $.throttle(delay, function(event) {
        oc_orientation.html(''+window.orientation);
      }));
    } else {
      oc_row.addClass('error');
      oc_support.html('Not Supported');
    }


    /**
     * Window Resize Event
     */
    var wr_row           = $('#wr-row');
    var wr_support       = $('#wr-support');
    var wr_viewport_size = $('#wr-viewport-size');

    if (window.UIEvent) {
      wr_row.addClass('success');
      wr_support.html('Supported');

      wr_viewport_size.html(''+window.innerWidth+' x '+window.innerHeight);

      win.on('resize', $.throttle(delay, function(event) {
        wr_viewport_size.html(''+window.innerWidth+' x '+window.innerHeight);
      }));
    } else {
      wr_row.addClass('error');
      wr_support.html('Not Supported');
    }

    /**
     * matchMedia Method
     */
    var mm_row         = $('#mm-row');
    var mm_support     = $('#mm-support');
    var mm_orientation = $('#mm-orientation');

    if (window.matchMedia) {
      mm_row.addClass('success');
      mm_support.html('Supported');

      var populateMMOrientation = function (mql) {
        if (mql.matches) {
          mm_orientation.html('Portrait');
        } else {
          mm_orientation.html('Landscape');
        }
      };

      var mql_portrait = window.matchMedia("(orientation: portrait)");
      mql_portrait.addListener(populateMMOrientation);
      populateMMOrientation(mql_portrait);
    } else {
      mm_row.addClass('error');
      mm_support.html('Not Supported');
    }

  });

}());
