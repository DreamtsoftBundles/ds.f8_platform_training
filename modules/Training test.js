$.fn.pagewalkthrough.defaults = {
  /* Array of steps to show
   */
  steps: [
    {
      // jQuery selector for the element to highlight for this step
      wrapper: '',
      // ##### <a name="popup-options">Popup options</a>
      popup: {
        // Selector for the element which contains the content, or the literal
        // content
        content: 'Hello, this is some test content',
        // Popup type - either modal, tooltip or nohighlight.
        // See [Popup Types](/pages/popup-types.html)
        type: 'modal',
        // Position for tooltip and nohighlight style popups - either top,
        // left, right or bottom
        position: 'top',
        // Horizontal offset for the walkthrough
        offsetHorizontal: 0,
        // Vertical offset for the walkthrough
        offsetVertical: 0,
        // Horizontal offset for the arrow
        offsetArrowHorizontal: 0,
        // Vertical offset for the arrow
        offsetArrowVertical: 0,
        // Default width for each popup
        width: '320',
        // Amount in degrees to rotate the content by
        contentRotation: 0,
        // If set to 'skip', skips tooltip/nohighlight types when the wrapper
        // does not exist. If set to anything else, uses the value as a fallback
        // popup type (e.g. 'modal' will fallback to a popup type of 'modal').
        fallback: 'skip'
      },
      // Automatically scroll to the content for the step
      autoScroll: true,
      // Speed to use when scrolling to elements
      scrollSpeed: 1000,
      // Callback when entering the step
      onEnter: $.noop,
      /* Callback when leaving the step.  Called with `true` if the user is
       * skipping the rest of the tour (gh #66)
       */
      onLeave: $.noop
    }
  ],
  // **(Required)** Walkthrough name.  Should be a unique name to identify the
  // walkthrough, as it will
  // be used in the cookie name
  name: "TEST WALKTHROUGH",
  // Automatically show the walkthrough when the page is loaded.  If multiple
  // walkthroughs set this to true, only the first walkthrough is shown
  // automatically
  onLoad: true,
  // Callback to be executed before the walkthrough is shown
  onBeforeShow: $.noop,
  // Callback executed after the walkthrough is shown
  onAfterShow: $.noop,
  // Callback executed in the event that 'restart' is triggered
  onRestart: $.noop,
  // Callback executed when the walkthrough is closed.  The walkthrough can be
  // closed by the user clicking the close button in the top right, or
  // clicking the finish button on the last step
  onClose: $.noop,
  // Callback executed when cookie has been set after a walkthrough has been
  // closed
  onCookieLoad: $.noop,
  /* ##### <a name="controls-options">Walkthrough controls</a>
   *
   * Hash of buttons to show.  Object keys are used as the button element's ID
   */
  buttons: {
    // ID of the button
    jpwClose: {
      // Translation string for the button
      i18n: 'Click here to close',
      // Whether or not to show the button.  Can be a boolean value, or a
      // function which returns a boolean value
      show: true
    },
    jpwNext: {
      i18n: 'Next &rarr;',
      // Function which resolves to a boolean
      show: function() {
        return !isLastStep();
      }
    },
    jpwPrevious: {
      i18n: '&larr; Previous',
      show: function() {
        return !isFirstStep();
      }
    },
    jpwFinish: {
      i18n: 'Finish &#10004;',
      show: function() {
        return isLastStep();
      }
    }
  }
};