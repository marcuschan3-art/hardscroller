# hardscroller
#Social Media Scroll Hardener

A browser extension designed to curb doomscrolling by adding physical scroll resistance on YouTube, TikTok, and Instagram. All other websites remain unaffected.

## How to Install and Activate

Follow these steps to activate the extension in your browser:

1. **Download this Repository:** Click the blue text that says "hardscroller" 
2. Click the green **Code** button at the top right of this page and select **Download ZIP**. Extract the folder on your computer.
3. **Open Extensions Page:** In Google Chrome, Brave, or Opera, navigate to `chrome://extensions/` (or `edge://extensions/` if you use Microsoft Edge).
4. **Enable Developer Mode:** Turn on the **Developer mode** toggle switch located in the top-right corner of the screen.
5. **Load the Extension:** Click the **Load unpacked** button that appears in the top-left corner.
6. **Select the Folder:** Browse your files, select the extracted folder containing the `manifest.json` and `content.js` files, and click **Select Folder**.

## HOW to make it easier or harder
Just change the number in the content.js file where it says "var hardScrollAmount = e.deltaY / 40;"   change the 40 to any number (lower=easier, higher=harder)

## How to Test It
* Open a new tab and head to `youtube.com`, `instagram.com`, or `tiktok.com`. Try scrolling it will feel throttled.

## How to Deactivate
Go back to `chrome://extensions/` and click the blue toggle switch on the **Social Media Scroll Hardener** card to turn it off, or click **Remove** to delete it.

CREDITS
I did use Cursor to write the code and Gemini to debug it. Im sorry for using AI but I'm a beginer to coding and just wanted to create something slightly useful.
