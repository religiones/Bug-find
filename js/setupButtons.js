
function setupButtons(studyViewer) {
    // Get the button elements
    var buttons = $(studyViewer).find('button');

    // Tool button event handlers that set the new active tool

    // WW/WL
    $(buttons[0]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.wwwc.activate(element, 1);
            cornerstoneTools.wwwcTouchDrag.activate(element);
        });
    });

    // Invert
    $(buttons[1]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            var viewport = cornerstone.getViewport(element);
            // Toggle invert
            if (viewport.invert === true) {
                viewport.invert = false;
            } else {
                viewport.invert = true;
            }
            cornerstone.setViewport(element, viewport);
        });
    });

    // Zoom
    $(buttons[2]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.zoom.activate(element, 5); // 5 is right mouse button and left mouse button
            cornerstoneTools.zoomTouchDrag.activate(element);
        });
    });

    // Pan
    $(buttons[3]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.pan.activate(element, 3); // 3 is middle mouse button and left mouse button
            cornerstoneTools.panTouchDrag.activate(element);
        });
    });

    // Stack scroll
    $(buttons[4]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.stackScroll.activate(element, 1);
            cornerstoneTools.stackScrollTouchDrag.activate(element);
        });
    });

    // Length measurement
    $(buttons[5]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.length.activate(element, 1);
        });
    });

    // Angle measurement
    $(buttons[6]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.simpleAngle.activate(element, 1);
        });
    });

    // Pixel probe
    $(buttons[7]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.probe.activate(element, 1);
        });
    });

    // Elliptical ROI
    $(buttons[8]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.ellipticalRoi.activate(element, 1);
        });
    });

    // Rectangle ROI
    $(buttons[9]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function (element) {
            cornerstoneTools.rectangleRoi.activate(element, 1);
        });
    });

    // Play clip
    $(buttons[10]).on('click touchstart', function() {
        forEachViewport(function(element) {
          var stackState = cornerstoneTools.getToolState(element, 'stack');
          var frameRate = stackState.data[0].frameRate;
          // Play at a default 10 FPS if the framerate is not specified
          if (frameRate === undefined) {
            frameRate = 10;
          }
          cornerstoneTools.playClip(element, frameRate);
        });
    });

    // Stop clip
    $(buttons[11]).on('click touchstart', function() {
        forEachViewport(function(element) {
            cornerstoneTools.stopClip(element);
        });
    });

    // Clear All
    $(buttons[13]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			toolStateManager = cornerstoneTools.globalImageIdSpecificToolStateManager;
			toolStateManager.clear(element);
			cornerstone.updateImage(element);
		});
    });
	
	// Save Image
    $(buttons[14]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			cornerstoneTools.saveAs(element, "filename.png");
		});
    });
	
	// Annotation
    $(buttons[15]).on('click touchstart', function() {
		disableAllTools();
    	forEachViewport(function(element) {
			cornerstoneTools.arrowAnnotate.activate(element, 1);
		});
    });
	
	// Rotate Left
    $(buttons[16]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			var viewport = cornerstone.getViewport(element);
            viewport.rotation -=90;
            cornerstone.setViewport(element, viewport);
		});
    });
	
	// Rotate Right
    $(buttons[17]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			var viewport = cornerstone.getViewport(element);
            viewport.rotation +=90;
            cornerstone.setViewport(element, viewport);
		});
    });
	
	// hFlip
    $(buttons[18]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			var viewport = cornerstone.getViewport(element);
            viewport.hflip = !viewport.hflip;
            cornerstone.setViewport(element, viewport);
		});
    });
	
	// vFlip
    $(buttons[19]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			var viewport = cornerstone.getViewport(element);
            viewport.vflip = !viewport.vflip;
            cornerstone.setViewport(element, viewport);
		});
    });
	
	// Reset
    $(buttons[20]).on('click touchstart', function() {
    	forEachViewport(function(element) {
			var viewport = cornerstone.getViewport(element);
            viewport.hflip = false;
            viewport.vflip = false;
            viewport.rotation = 0;
            cornerstone.setViewport(element, viewport);
		});
    });
	
	// Magnification
    $(buttons[21]).on('click touchstart', function() {
		disableAllTools();
    	forEachViewport(function(element) {
			cornerstoneTools.magnify.activate(element, 1);
            cornerstoneTools.magnifyTouchDrag.activate(element);
		});
    });
	
	// Segmentation Brush
    $(buttons[22]).on('click touchstart', function() {
		disableAllTools();
    	forEachViewport(function(element) {
			//cornerstoneTools['brush'].activate(element, 1);
		});
    });

    // Tooltips
    $(buttons[0]).tooltip();
    $(buttons[1]).tooltip();
    $(buttons[2]).tooltip();
    $(buttons[3]).tooltip();
    $(buttons[4]).tooltip();
    $(buttons[5]).tooltip();
    $(buttons[6]).tooltip();
    $(buttons[7]).tooltip();
    $(buttons[8]).tooltip();
    $(buttons[9]).tooltip();
    $(buttons[10]).tooltip();
    $(buttons[11]).tooltip();
    $(buttons[12]).tooltip();
    $(buttons[13]).tooltip();
	$(buttons[14]).tooltip();
	$(buttons[15]).tooltip();
	$(buttons[16]).tooltip();
	$(buttons[17]).tooltip();
	$(buttons[18]).tooltip();
	$(buttons[19]).tooltip();
	$(buttons[20]).tooltip();
	$(buttons[21]).tooltip();
	$(buttons[22]).tooltip();
};
