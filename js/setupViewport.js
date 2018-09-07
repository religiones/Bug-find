function setupViewport(element, stack, image) {
    // Display the image on the viewer element
    cornerstone.displayImage(element, image);

    // If it's a movie (has frames), then play the clip
    if (stack.frameRate !== undefined) {
        cornerstone.playClip(element, stack.frameRate);
    }
	
	cornerstoneTools.orientationMarkers.enable(element);
	
    // Activate mouse clicks, mouse wheel and touch
    cornerstoneTools.mouseInput.enable(element);
    cornerstoneTools.mouseWheelInput.enable(element);
    cornerstoneTools.touchInput.enable(element);

    // Enable all tools we want to use with this element
    cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
    cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
    cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
    cornerstoneTools.probe.enable(element);
    cornerstoneTools.length.enable(element);
    cornerstoneTools.ellipticalRoi.enable(element);
    cornerstoneTools.rectangleRoi.enable(element);
    cornerstoneTools.wwwcTouchDrag.activate(element);
    cornerstoneTools.zoomTouchPinch.activate(element);

    // Stack tools
    cornerstoneTools.addStackStateManager(element, ['playClip']);
    cornerstoneTools.addToolState(element, 'stack', stack);
    cornerstoneTools.stackScrollWheel.activate(element);
    cornerstoneTools.stackPrefetch.enable(element);
	
	
	//cornerstoneTools.rotate.activate(element, 1);
	
	cornerstoneTools.magnify.enable(element);
    cornerstoneTools.magnifyTouchDrag.enable(element);
	
	/*
	var configuration = cornerstoneTools.brush.getConfiguration();
	configuration.radius = parseInt(radius, 10);

	const colormapId = 'MyNewColorMap';
	const colormap = cornerstone.colors.getColormap(colormapId);

	colormap.setNumberOfColors(2);
	colormap.setColor(0, [0, 0, 0, 0]);
	colormap.setColor(1, [200, 0, 0, 255]);

	configuration.colormapId = colormapId;
	cornerstoneTools.brush.setConfiguration(configuration);
	
	var viewport = cornerstone.getViewport(element);
    viewport.pixelReplication = true;
    cornerstone.setViewport(element, viewport);
	*/

}
