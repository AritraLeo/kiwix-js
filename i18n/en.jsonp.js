/* eslint-disable quote-props, quotes, indent */
document.localeJson = {
  "en": {
    "translation": {
      "title": "Kiwix",
      "sub-title": "Offline Browser",
      "home": "Home",
      "home-search": "Search",
      "home-welcome-text": "Once you have loaded a ZIM archive, you can search its contents using the above search field.",
      "home-btn-random-tip": "Select a random article to display",
      "home-btn-random": "Random",
      "home-btn-back": "Back",
      "home-btn-fileselect": "Select ZIM file(s)",
      "home-btn-forward": "Forward",
      "home-btn-top": "Top",
      "home-prefix-placeholder": "Search...",
      "home-prefix-tip": "You can search the contents of your ZIM archive using this search field. It will suggest article titles **starting** with the letters you type.",
      "configure": "Configure",
      "configure-title": "Configuration",
      "configure-about-usage-link": "About (Usage)",
      "configure-download-instructions": "This application needs a ZIM archive to work.<br />For full instructions, please see the section",
      "configure-select-instructions": "Please select or drag and drop a .zim file (or all the .zimaa, .zimab etc in case of a split ZIM file):",
      "configure-selectordisplay": "Drag and drop a new ZIM file, or",
      "configure-selectordisplay-link": "display file selectors",
      "configure-static-content": "Only ZIMs with static content (e.g. Wiki-style) are supported in JQuery mode.<br />",
      "configure-supportedarchives": "For information on ZIM compatibility, see",
      "configure-compatibility-images-title": "Image handling",
      "configure-compatibility-images-label": "Work around anti-fingerprinting measures by substituting WebP images with canvas elements (setting determined automatically, can be disabled):",
      "configure-compatibility-images-tip": "For browsers that do not have native WebP support and that implement anti-fingerprinting measures, we cannot extract the image data from the canvas elements produced by the polyfill, so we use the canvas as substitute for the image. If not needed, disabling this may improve performance.",
      "configure-compatibility-images-control": "Use WebP workaround if needed",
      "configure-display-settings-title": "Display settings",
      "configure-display-panel-header": "Display options",
      "configure-display-uianimations": "Animate transition between app pages",
      "configure-display-uianimations-tip": "The animation is on by default and can be disabled by unchecking this option.",
      "configure-display-homekeyfocus": "<strong>Use Home key to focus search bar</strong> (may rarely have side effects on ZIM files that handle Home key)",
      "configure-display-homekeyfocus-tip": "Enables quick access to search, no matter where you are in an article.",
      "configure-display-openexternallinks": "<strong>Open external links in new tabs</strong>. Disabling this might break kiwix-js UI in some specific cases",
      "configure-display-openexternallinks-tip": "Opens the external links outside kiwix-js (avoids some side-effects affecting kiwix-js UI).",
      "configure-display-selectapptheme": "<b>Select app theme</b> (content inversion is experimental):",
      "configure-display-selectapptheme-tip": "Allows selection of themes either for the app only, or for the app and the loaded content.",
      "configure-display-themeoption-light": "Light",
      "configure-display-themeoption-dark-apponly": "Dark (app only)",
      "configure-display-themeoption-dark-invert": "Dark (generic invert)",
      "configure-display-themeoption-dark-mwinvert": "Dark (wikimedia invert)",
      "configure-display-themeoption-auto-apponly": "Auto (app only)",
      "configure-display-themeoption-auto-invert": "Auto (generic invert)",
      "configure-display-themeoption-auto-mwinvert": "Auto (wikimedia invert)",
      "configure-display-apptheme-auto-description": "&emsp;(Auto themes match the dark/light mode of your device.)",
      "configure-display-apptheme-mwinvert-description": "* Implements workarounds specific to Wikimedia ZIMs. Try generic option if there are display errors with recent ZIMs.",
      "configure-display-apptheme-info": "[&nbsp;Show article with applied theme&nbsp;]",
      "configure-language-selector-default": "Language",
      "configure-language-selector-other": "More soon...",
      "configure-performance-settings-title": "Performance settings",
      "configure-performance-panel-header": "Speed up archive access",
      "configure-performance-cacheassets-description": "Kiwix JS can speed up the display of articles by caching assets:",
      "configure-performance-cacheassets-true": "<strong>Cache assets</strong> (recommended)",
      "configure-performance-cacheassets-true-tip": "The cache provides high-speed access to ZIM assets such as stylesheets and scripts, which will improve article load times.",
      "configure-performance-cacheassets-false": "<strong>Do not cache assets</strong> (empties caches: for low-memory devices)",
      "configure-performance-cacheassets-false-tip": "For low-memory devices, caching assets may cause app instability. This option allows you to disable the cache.",
      "configure-performance-cachestatuspanel-label": "Cache status",
      "configure-performance-cachestatuspanel-cacheused": "Cache used",
      "configure-performance-cachestatuspanel-assets": "Assets",
      "configure-performance-searchrange-label": "Select max number of search results:",
      "configure-performance-searchrange-valuetext": "Value",
      "configure-performance-searchrange-help": "default 25, higher values increase search time",
      "configure-compatibility-settings-title": "Compatibility settings",
      "configure-compatibility-panel-header": "Content injection mode",
      "configure-compatibility-see": "See",
      "configure-compatibility-modeslink": "About (Technical Information)",
      "configure-compatibility-helpstub": "for an explanation of the difference between these modes:",
      "configure-compatibility-option-serviceworker": "<strong>ServiceWorker</strong> (<i>recommended</i>, supports dynamic content and inline JavaScript)",
      "configure-compatibility-option-serviceworker-tip": "This mode requires that the browser or framework be capable of installing a Service Worker. It enables dynamic ZIM content and running JavaScript (including inline JS). It works by intercepting the browser's Fetch calls and supplying the requested content from the ZIM.",
      "configure-compatibility-option-serviceworkerlocal": "<strong>ServiceWorkerLocal</strong> (secure local Service Worker, but <i>no inline JavaScript</i>)",
      "configure-compatibility-option-serviceworkerlocal-tip": "[For Chromium extensions only:] This mode runs the Service Worker in a secure local sandbox, and does not need one-time access to our PWA server. However, due to the strong security restrictions in the API, it is not capable of running inline JavaScript, so dynamic ZIM content may fail.",
      "configure-compatibility-option-jquery": "<strong>JQuery</strong> (<i>deprecated</i>: no dynamic content, compatible with older browsers)",
      "configure-compatibility-option-jquery-tip": "This mode is deprecated, but should be fine for Wikipedia / WikiMedia archives. It works on all devices.",
      "configure-expert-settings-title": "Expert settings",
      "configure-expert-panel-header": "Troubleshooting and development",
      "configure-expert-hideactivecontentwarning": "<strong>Permanently hide active content warning</strong> (for experienced users)",
      "configure-expert-hideactivecontentwarning-tip": "A warning is shown if you load a ZIM that has active or dynamic content while you are in JQuery mode. It is not recommended to disable this warning.",
      "configure-expert-disabledragdrop": "<strong>Disable drag-and-drop</strong> (in case it is causing anomalies)",
      "configure-expert-disabledragdrop-tip": "This option disables drag-and-drop of ZIM files onto the app. It is not recommended to disable this feature.",
      "configure-expert-bypassappcache": "<b>Bypass AppCache</b> (<i>disables offline use of this app!</i>)",
      "configure-expert-bypassappcache-tip": "WARNING: Leaving this checked will prevent offline usage of the PWA. Setting will clear all existing Cache API caches, but assetsCache will be used unless also disabled above. For testing new code with the PWA.",
      "configure-expert-resetapp-description": "Reset the app to default settings and erase all caches:",
      "configure-expert-resetapp": "Reset App",
      "configure-expert-resetapp-tip": "This will return the app to its original settings on launch, and will empty all caches and settings and deregister Service Workers. The app will then reload.",
      "configure-api-panel-header": "API Status",
      "api-messagechannel-available": "MessageChannel API: available",
      "api-messagechannel-unavailable": "MessageChannel API: unavailable",
      "api-serviceworker-available-registered": "ServiceWorker API: available, and registered",
      "api-serviceworker-available-unregistered": "ServiceWorker API: available, but not registered",
      "api-serviceworker-unavailable": "ServiceWorker API: unavailable",
      "api-cookie": "Cookie",
      "api-localstorage": "Local Storage",
      "api-storage-used-label": "Settings Storage API in use:",
      "api-none": "None",
      "api-error-uninitialized_masculine": "Not initialized",
      "api-error-uninitialized_feminine": "Not initialized",
      "api-decompressor-error-loading-part1": "Error loading",
      "api-decompressor-error-loading-part2": "decompressor!",
      "api-decompressor-label": "Decompressor API",
      "api-pwa-origin-label": "PWA Origin:",
      "api-searchprovider-label": "Search Provider:",
      "api-searchprovider-title": "Title",
      "api-searchprovider-titleonly": "Title only",
      "dialog-allow-internetaccess-title": "Allow Internet access",
      "dialog-allow-internetaccess-message1": "<p>To enable the Service Worker, we",
      "dialog-allow-internetaccess-message2": "<p>We shall attempt to switch you to ServiceWorker mode (this is now the default).",
      "dialog-allow-internetaccess-message3": "It supports more types of ZIM archives and is much more robust.</p><p>We",
      "dialog-allow-internetaccess-message4": "need one-time access to our secure server so that the app can re-launch as a Progressive Web App (PWA). If available, the PWA will work offline, but will auto-update periodically when online as per the Service Worker spec.</p><p>You can switch back any time by returning to JQuery mode.</p><p>WARNING: This will attempt to access the following server:<br/>",
      "dialog-archive-notset-title": "No archive selected",
      "dialog-archive-notset-message": "Archive not set: please select an archive",
      "dialog-article-notfound-message": "Article with the following URL was not found in the archive:",
      "dialog-article-notfound-title": "Error: article not found",
      "dialog-article-readerror-message": "Error reading article with url:",
      "dialog-article-readerror-title": "Error reading article",
      "dialog-cancel": "Cancel",
      "dialog-ok": "Okay",
      "dialog-confirm": "Confirm",
      "dialog-blocked-fileprotocol": "<p>You seem to be opening kiwix-js with the file:// protocol, which is blocked by your browser for security reasons.</p><p>The easiest way to run it is to download and run it as a browser extension (from the vendor store).</p><p>Or else you can open it through a web server: either through a local one (http://localhost/...) or through a remote one (but you will need a secure connection, e.g.: https://webserver/...)</p><p>Another option is to force your browser to accept that (but you'll open a security breach): on Chrome, you can start it with --allow-file-access-from-files command-line argument; on Firefox, you can set privacy.file_unique_origin to false in about:config</p>",
      "dialog-bypassappcachecheck-message": "This setting can only be used in ServiceWorker mode!",
      "dialog-bypassappcache-conflict-title": "Deselect \"Bypass AppCache\"",
      "dialog-bypassappcache-conflict-message": "You must deselect the \"Bypass AppCache\" option before switching to JQuery mode!",
      "dialog-devicestrage-error-title": "Error: no matching storage",
      "dialog-devicestorage-error-message": "Unable to find which device storage corresponds to directory",
      "dialog-disabledragdrop-title": "Reload app",
      "dialog-disabledragdrop-message": "<p>We will now attempt to reload the app to apply the new setting.</p><p>(If you cancel, then the setting will only be applied when you next start the app.)</p>",
      "dialog-error-title": "Error!",
      "dialog-file-notset-message": "Data files not set",
      "dialog-file-notset-title": "Archive not ready",
      "dialog-invalid-archivelocation-title": "Error: invalid archive files location",
      "dialog-invalid-archivelocation-message": "It looks like you have put some archive files at the root of your sdcard (or internal storage). Please move them to a subdirectory",
      "dialog-invalid-zim-title": "Invalid file format",
      "dialog-invalid-zim-message": "One or more files does not appear to be a ZIM file!",
      "dialog-launchlocal-title": "Warning!",
      "dialog-launchlocal-message": "This will switch to using locally packaged code only. Some configuration settings may be lost.<br/><br/>WARNING: After this, you may not be able to switch back to SW mode without an online connection!",
      "dialog-launchpwa-fail-title": "Confirmation to retry PWA launch",
      "dialog-launchpwa-fail-message": "The last attempt to launch the PWA appears to have failed.<br/><br/>Do you wish to try again?",
      "dialog-launchpwa-unsupported-title": "ServiceWorker API not available",
      "dialog-launchpwa-unsupported-message": "<p>Unfortunately, your browser does not appear to support ServiceWorker mode, which is now the default for this app.</p><p>You can continue to use the app in the (now deprecated) JQuery mode, but note that this mode only works well with ZIM archives that have static content, such as Wikipedia / Wikimedia ZIMs or Stackexchange.</p><p>If you can, we recommend that you update your browser to a version that supports ServiceWorker mode.</p>",
      "dialog-messagechannel-unsupported-title": "MessageChannel API not available",
      "dialog-messagechannel-unsupported-message": "The MessageChannel API is not available on your device. Falling back to JQuery mode...",
      "dialog-old-android": "You seem to be using an Android device with DeviceStorage API. That must be a quite old Firefox version because this API has been removed in 2016. Be aware that there was a bug on Firefox, that prevents finding Wikipedia archives in a SD-card (at least on some devices). Please put the archive in the internal storage if the application can't find it.",
      "dialog-other-language-message": "We are working hard to bring you more languages! If you are interested in helping to translate the interface to your language, please create an issue on our GitHub. Thank you!",
      "dialog-open-externalurl-message": "<p>Do you want to open this external link?",
      "dialog-open-externalurl-newtab": "(in a new tab)",
      "dialog-open-externalurl-title": "Opening external link",
      "dialog-randomarticle-error-message": "Error finding random article",
      "dialog-reset-warning-title": "WARNING!",
      "dialog-reset-warning-message": "This will reset the app to a freshly installed state, deleting all app caches and settings!",
      "dialog-server-access-check": "Checking server access...",
      "dialog-server-access-check-failed": "The server is not currently accessible!<br/><br/>(Kiwix needs one-time access to the server to cache the PWA).<br/>Please try again when you have a stable Internet connection.",
      "dialog-serviceworker-registration-failure-title": "Failed to register Service Worker",
      "dialog-serviceworker-registration-failure-message": "The Service Worker could not be properly registered. Switching back to JQuery mode... Error message:",
      "dialog-serviceworker-registration-failure-fileprotocol": "<br/><br/>You seem to be opening kiwix-js with the file:// protocol. You should open it through a web server: either through a local one (http://localhost/...) or through a remote one (but you need a secure connection, e.g.: https://webserver.org/...)",
      "dialog-serviceworker-unsupported-title": "ServiceWorker mode unsupported",
      "dialog-serviceworker-unsupported-message": "<p>Unfortunately, your browser does not appear to support ServiceWorker mode, which is now the default for this app.</p><p>You can continue to use the app in the (now deprecated) JQuery mode, but note that this mode only works well with ZIM archives that have static content, such as Wikipedia / Wikimedia ZIMs or Stackexchange.</p><p>If you can, we recommend that you update your browser to a version that supports ServiceWorker mode.</p>",
      "dialog-serviceworker-unsupported-fallback": "Use JQuery mode",
      "dialog-serviceworker-defaultmodechange-title": "Change of default content injection mode",
      "dialog-serviceworker-defaultmodechange-message": "<p>We have switched you to ServiceWorker mode (this is now the default). It supports more types of ZIM archives and is much more robust.</p><p>If you experience problems with this mode, you can switch back to the (now deprecated) JQuery mode. In that case, please report the problems you experienced to us (see About section).</p>",
      "dialog-unsupported-archivetype-message": "<p>You are attempting to open a Zimit-style archive, which is currently unsupported in this app.</p><p>There is experimental support for this kind of archive in the Kiwix JS PWA. Go to: <a href=\"https://pwa.kiwix.org\" target=\"_blank\">https://pwa.kiwix.org</a>.</p><p>Alternatively, you can use Kiwix Serve to serve this archive to your browser from localhost. Kiwix Serve is included with <a href=\"https://www.kiwix.org/applications/\" target=\"_blank\">Kiwix Desktop</a>.</p>",
      "dialog-unsupported-archivetype-title": "Unsupported archive type!",
      "dialog-welcome-title": "Welcome",
      "dialog-welcome-message": "Welcome to Kiwix! This application needs at least a ZIM file in your SD-card (or internal storage). Please download one and put it on the device (see About section). Also check that your device is not connected to a computer through USB device storage (which often locks the SD-card content)",
      "about": "About",
      "about-app": "About",
      "abouut-app-title": "About this app",
      "about-usage": "Usage",
      "about-usage-title": "Usage",
      "about-search-usage": "Search usage",
      "about-image-download": "Image download",
      "about-privacy-policy": "Privacy policy",
      "about-technical-information": "Technical information",
      "about-official-site": "Official site:",
      "about-zim-format": "ZIM archive format",
      "about-fat-fs": "Downloading and storing large archives",
      "about-contentinjection-modes": "JQuery and ServiceWorker modes",
      "about-feedback": "Feedback / helping / contributing",
      "about-credits": "Credits",
      "about-licence": "Licence information",
      "about-other-platforms": "Other platforms/versions",
      "about-download-archives": "Download ZIM archives (content):",
      "about-download-language": "Download by language",
      "about-download-index": "Index of all files",
      "about-download-library": "Library of archives",
      "about-app-para1": "If your Internet access is expensive, slow, unreliable, controlled or censored, you can still gain free offline access to many valuable resources. Carry the world's largest Encyclopaedia around in your pocket, in any language, or a worldwide Travel Guide when you are on the road!",
      "about-app-para2": "To <a href=\"#usage\">use this app</a>, you will need to download, completely free, one or more archives (called ZIM archives) from the Kiwix website and store them on your device or a thumb drive / external drive. You will then be able to access your chosen content totally offline.",
      "about-app-para3": "Archives are available with content in many different languages from sources such as Wikipedia, Wiktionary, WikiMed, Wikivoyage, Project Gutenberg, Stack Exchange, TED Talks and many others. There are also \"themed\" archives with selected topics of interest such as medicine, movies, history, geography, maths, physics, etc.",
      "about-usage-step1": "Step 1: Choose your content",
      "about-step1-para1": "Go to <a href=\"https://library.kiwix.org\" target=\"_blank\">https://library.kiwix.org&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> (easy-to-use graphical interface, archive previews) or <a href=\"https://download.kiwix.org/zim/\" target=\"_blank\">https://download.kiwix.org/zim/&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> (traditional file list), and select the archives that interest you in your favourite language(s). If you don't have Internet access, you can also access/share content from a USB stick.",
      "about-step1-para2": "For a quick test, we recommend you start with a small archive containing all the <a href=\"https://download.kiwix.org/zim/wikipedia_en_climate_change_maxi.zim\" target=\"_blank\">Wikipedia articles about climate change&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> in English.",
      "about-step1-para3": "Wikipedia archives with \"<b>mini</b>\" in the filename are the smallest, since they only contain the introduction of each article; \"<b>nopic</b>\" means no pictures; \"<b>maxi</b>\" means everything except video and audio. The largest files without any of these qualifiers are complete. Note that you can only see the filenames easily in the <a href=\"https://download.kiwix.org/zim/\" target=\"_blank\">traditional file list&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>.",
      "about-step1-para4": "<b>Before downloading non-Wiki ZIM types, check if your browser supports archives with dynamic content</b>: look at the bottom of the Configuration page, in the API panel, and if you see \"ServiceWorker API available and registered\" in green, then the app can read all ZIM types (except Zimit: see <a href=\"#format\">ZIM archive format</a> for more details). Otherwise you should mostly stick to MediaWiki (Wikipedia, Wikivoyage, Wiktionary...) and Stack Exchange archives (see <a href=\"#modes\">modes</a> below for an explanation).",
      "about-step2": "Step 2: Download or copy the content onto your device",
      "about-step2-para1": "Download your chosen content and/or copy it into a dedicated ZIM folder on your device's storage. Check the size before you download archives as many file sizes are very large (several Gigabytes). Themed versions such as WikiMed, or versions without images, are much smaller than full Wikipedia archives and can be readily downloaded in your browser.",
      "about-step2-para2": "If you don't have enough internal storage, consider using a modern microSD card, an external hard drive, or thumb drive. For larger archives (greater than 2GB) on older devices, it is possible that an archive might not be supported if your storage is formatted using a FAT filesystem (NB exFAT is fine). See <a href=\"#FAT\">Downloading large archives</a> below for a solution.",
      "about-step3": "Step 3: Drag and drop the file into the app",
      "about-step3-para1": "You can drag and drop the archive file into the the open app (if you have a split file, be sure to drag all parts), or else you can go to the \"Configure\" menu and select your ZIM file.",
      "about-step4": "Step 4: Enjoy your offline content!",
      "about-search-title": "Title and full-text search usage",
      "about-search-para1": "There are three types of search:",
      "about-search-para2": "<b>Title search</b> matches the <b>start</b> of an article title, so if you search for 'France' you will get 'France (country)', 'France (disambiguation)', 'France (film)', etc. This kind of search tries to be <b>case-insensitive</b>, but the number of case variants tried is necessarily limited. If not enough results are returned, you can increase the maximum number of search results using the slider in Configuration.",
      "about-search-para3": "<b>Alphabetical search:</b> If you type a letter of the alphabet in the search box (upper case may be most useful), it will show an alphabetical list of articles starting with that letter. This is useful for ZIM archives that have descriptive rather than semantic titles (e.g. TED Talks). You can also display a list of all titles (up to the limit set in Configuration) simply by clicking the search button without typing anything.",
      "about-search-para4": "<b>Full-text search:</b> This type of search is only availalbe in relatively recent desktop browsers, and if the archive contains a full-text index. If it is supported, it will be used automatically, but it is slower than title search, and you may notice a delay before the results are added to the title-search results. Additionally, full-text search cannot be used if your archive is split into various chunks. To see whether it is available, look in the API panel at the bottom of the Configuration page after you have loaded a ZIM. If it says \"Xapian [fulltext]\" then it should be automatically enabled for that ZIM.",
      "about-image-download-para1": "Unfortunately, it is not usually possible to download and save an image from a ZIM article using the context menu (after right-clicking or long-pressing the image). One workaround is to choose \"Copy Image\" in the context menu, then paste it in any suitable software (Paint, Gimp etc, or even a Word processor), and then save it from there.",
      "about-privacy-short-title": "Short version:",
      "about-privacy-short-para1": "Kiwix JS works offline, and does not collect or record any of your personal data. It only remembers your browsing history for the duration of a session (for the purpose of returning to previously viewed pages). This history is lost on exiting the app and is not recorded in any way.",
      "about-privacy-long-title": "Longer version:",
      "about-privacy-long-para1": "This application only reads the archive files that you explicitly select on your device together with files in its own package. Some ZIM archives contain active content (scripts) which may, in rare circumstances, attempt to contact external servers for incidental files such as fonts. We have a Content Security Policy which attempts to prevent this, but it is not possible to guarantee that all such requests will be blocked, for example if a ZIM were to contain intentionally malicious code that can break the sandbox. Please note that scripts will only run if you enable <a href=\"#modes\">ServiceWorker Mode</a> (the default) in Configuration. Nevertheless, if you believe your Internet access is insecure, or is being observed or censored, we recommend that you completely shut down your Internet (Data or WiFi) access before using the application.",
      "about-privacy-long-para2": "Additionally, if you obtained this app from a third-party site (including a browser extension store), then the site operator may track your usage of the app (e.g. download, install, uninstall, date and number of sessions) for the purpose of providing anonymous, aggregate usage statistics to developers. If this concerns you, you should check the relevant site's Privacy Policy for further information.",
      "about-zim-format-para1": "Offline archives use the <a href=\"https://www.openzim.org//wiki/OpenZIM\" target=\"_blank\">OpenZIM format&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>, but note that this app has only been tested extensively on MediaWiki (Wikipedia, Wikivoyage, etc.), Gutenberg, Stackexchage and TED Talks archives. Video content is supported if your device, browser or OS understands the format. Some ZIMs use a proprietary dynamic UI which is only supported in ServiceWorker Mode (<a href=\"#modes\">see below</a>).",
      "about-zim-format-para2": "This application is not currently compatible with archives that are created by <b>Zimit</b> (<a href=\"https://youzim.it\" target=\"_blank\">https://youzim.it&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>) using the Web Archive (WARC) format. We have plans to enable this format, but there are considerable technical challenges to overcome in order to display these archives with the fidelity that you expect from Kiwix -- see <a href=\"https://github.com/kiwix/kiwix-js/issues/1009\" target=\"_blank\">issue #1009&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>. <b>However, there is <i>experimental</i> support for Zimit archives in our Progressive Web App (PWA) available from <a href=\"https://pwa.kiwix.org\" target=\"_blank\">https://pwa.kiwix.org&nbsp;<img src=\"img/Icon_External_Link.png\" /></a></b>.",
      "about-large-archives-para1": "Full versions of Wikipedia can be enormous: French, German and Spanish Wikipedia with images are each >25GB; full English Wikipedia with images is >90GB. For these very large archives you can find convenient BitTorrent links provided by <a href=\"https://library.kiwix.org\">library.kiwix.org&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>, which may be more reliable than attempting to use your browser. You can use an open-source BitTorrent client such as <a href=\"https://www.qbittorrent.org/\" target=\"_blank\">QBittorrent&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> with these links (install the software before clicking on the torrent link).",
      "about-large-archives-para2": "If you need to store a large ZIM archive on an older filesystem formatted as FAT16 or FAT32, you need to be aware of the file size limits of those systems (FAT16 &lt; 2GiB; FAT32 &lt; 4GiB). Most modern microSD cards, thumb drives or hard drives are formatted as exFAT or another modern FS such as NTFS, which do not have this issue. If your ZIM archive is larger than the FS limit, it is possible to split the archive into several 2GiB-1 or 4GiB-1 files (or smaller). You will need to give a file extension to each chunk in the right order following this pattern: <code>*.zimaa</code>, <code>*.zimab</code>, <code>*.zimac</code>, <code>...</code>, etc.). When you pick this archive in the app, be sure to pick <b>all</b> the chunks, or drag-and-drop them all into the app.",
      "about-large-archives-para3": "For some information on how to split archves, see <a href=\"https://github.com/kiwix/kiwix-js-windows/tree/main/AppPackages#download-a-zim-archive-all-platforms\" target=\"_blank\">Download a ZIM archive&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>.",
      "about-contentinjection-para1": "Depending on your browser or framework, this app may be capable of running in different modes, which we call \"ServiceWorker Mode\" and \"JQuery Mode\". There is a toggle under Compatibility Settings in Configuration that allows you to select between these. Here is a technical explanation of what these modes do:",
      "about-contentinjection-para2": "<b>ServiceWorker Mode</b>: This is the default mode. As its name implies, it requires that the browser or framework be capable of installing a Service Worker, which is usually the case in modern browsers. It works by intercepting the browser or framework's Fetch calls (network requests) and supplying the requested content from the ZIM. In this mode, the content is read and supplied as-is from the archive to the browser. Dynamic content (e.g. JavaScript) and proprietary UIs are fully supported in this mode. However, Zimit archives are <b>not</b> currently supported due to a conflict between the Kiwix JS Service Worker and the WARC Service Worker (but you can use the PWA for experimental support, see above). This mode can feel initially a little slower than JQuery mode until commonly used assets are cached, but it soon equals JQuery mode in speed, at least in modern browsers. However, older browsers such as IE11 are incompatible with this mode, and the app must be running in a secure context (<code>https:</code>, <code>localhost</code>, or certain browser extensions). While this mode is not natively supported in Mozilla (Firefox) browser extensions, we provide a functional workaround by re-launching the extension as a Progressive Web App (PWA). Note that this mode cannot run with the <code>file:</code> protocol (but only IE11 and old Edge allow the app to run by launching <code>index.html</code> from the file system).",
      "about-contentinjection-para3": "<b>ServiceWorkerLocal Mode</b>: This is only available in Chromium extensions. It is the same as above, but due to very tight security restrictions in these extensions, no inline JavaScript or eval statements can run. Unfortunately, modern ZIMs may have such dynamic content, and so functionality may be restricted in this mode. Nevertheless, it is more secure: the content is sandboxed and no one-time server access is required to enable the Service Worker. You are protected from inline code execution at the cost of loss of some features in dynamic ZIMs.",
      "about-contentinjection-para4": "<b>JQuery Mode</b>: This mode is now deprecated (and does not in fact require JQuery). It is retained for compatibility with older browsers or frameworks that cannot run Service Workers. The mode has limitations which mean that only static content can be displayed, such as that found in Wikipedia / WikiMedia archives and (for now) Stackexchange. It is a way of inserting articles extracted from the ZIM into the DOM (browser document) by injecting the content into an iframe or tab. We then use native DOM methods, or sometimes JQuery, to parse the article's HTML and insert required assets (images, stylesheets, event listeners for hyperlinks, etc.). On old devices, DOM traversal can be slow, but it is compensated for because we do not extract or run JavaScript assets (which would be technically extremely complicated). As a result, for WikiMedia archives this mode is usually quite fast. On the downside, ZIMs that have a proprietary dynamic UI (such as Gutenberg or TED talks) are only partially supported in this mode: the UI does not work, but articles can be searched for and loaded from the search bar.",
      "about-feedback-para1": "We welcome constructive feedback and suggestions for improvement. We will consider feature requests, but it is even better if you can contribute to improving the app! The source code is on <a href=\"https://github.com/kiwix/kiwix-js\" target=\"_blank\">GitHub&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>, and we welcome Pull Requests (but open an issue and discuss your proposal first).",
      "about-feedback-para2": "The <a href=\"https://github.com/kiwix/kiwix-js/issues\" target=\"_blank\">bug and issue tracker&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> is on GitHub too. We use it as our roadmap. Alternatively, you can send your feedback <a href=\"mailto:egk10@cam.ac.uk?subject=%5BKiwix%5D%20Feedback%20about%20Kiwix%20JS\">by email</a>. In all cases, if you are reporting a bug, please give as much detail as you can: which device you are using, which version of Kiwix, which archive, which articles etc.",
      "about-feedback-para3": "If you like the Kiwix project and use it, please consider giving a donation at <a href=\"https://support.kiwix.org\" target=\"_blank\">https://support.kiwix.org&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> to help maintain our servers, ZIM files and applications.",
      "about-feedback-other-help": "You can also help by:",
      "about-feedback-other-para1": "Adding articles to Wikipedia or improving the existing ones, by <a href=\"https://en.wikipedia.org/wiki/Wikipedia:Introduction\" target=\"_blank\">editing articles&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>;",
      "about-feedback-other-para2": "<a href=\"https://wiki.kiwix.org/wiki/Special:MyLanguage/Participate\" target=\"_blank\">Participating&nbsp;<img src=\"img/Icon_External_Link.png\" /></a> in the Kiwix project.",
      "about-credits-gratitude": "We owe a big debt of gratitude to:<ul><li>Kelson and all the Kiwix community for welcoming us to this project;</li><li>Wikipedia teams and contributors for helping to make knowledge available to everybody;</li><li>All the developers of libraries and tools we used, for releasing them as Free software (see libraries and tools paragraph).</li></ul>",
      "about-licence-text": "<p>Copyright 2013-2023 Mossroy, Peter-x, Jaifroid and other contributors.</p><p>This application is licensed under the GPL v3 Licence:</p><em><p>Kiwix is free software: you can redistribute it and/or modify it under the terms of the GNU General Public Licence as published by the Free Software Foundation, either version 3 of the Licence, or (at your option) any later version.</p><p>Kiwix is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public Licence for more details.</p><p>You should have received a copy of the GNU General Public Licence along with Kiwix (file LICENSE-GPLv3.txt).  If not, see <a href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.</p></em>",
      "about-libraries": "Main libraries and resources used:",
      "about-other-clients": "Other Kiwix clients exist on various platforms such as desktop and mobile apps for Linux, Windows, Android and iOS. We also have an offline-first, fully featured PWA based on the code in Kiwix JS: <a href=\"https://pwa.kiwix.org\" target=\"_blank\">https://pwa.kiwix.org&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>.",
      "about-official-download": "See the official download site: <a href=\"https://www.kiwix.org/applications/\" target=\"_blank\">https://www.kiwix.org/applications/&nbsp;<img src=\"img/Icon_External_Link.png\" /></a>.",
      "about-back-contents": "↑ Back to Contents",
      "alert-activecontentwarning-title": "Unable to display active content:",
      "alert-activecontentwarning-part1": "This ZIM is not fully supported in JQuery mode.<br />Content may be available by clicking search button above (or type a letter of the alphabet), or else",
      "alert-activecontentwarning-part2": "switch to ServiceWorker mode",
      "alert-activecontentwarning-part3": "if your platform supports it.",
      "alert-activecontentwarning-part4": "Permanently hide",
      "alert-update-version": "Version",
      "alert-update-available": "is ready to install. (Re-launch app to install.)",
      "alert-download-message": "<strong>Download</strong> If the download does not begin, please tap the following link:",
      "spinner-caching": "Caching",
      "spinner-caching-assets": "Caching assets...",
      "spinner-loading": "Loading"
    }
  }
}
