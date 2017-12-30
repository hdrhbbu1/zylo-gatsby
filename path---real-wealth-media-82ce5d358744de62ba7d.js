webpackJsonp([0xfd1020e39029],{340:function(A,a){A.exports={data:{markdownRemark:{html:'<h2>Polymer</h2>\n<p>As a replacement for the WordPress version of the <em>Real</em> Wealth<sup>®</sup> Media, I decided to build a progressive web app using web components and specifically Polymer. This is exciting new web technology and brings the web to the same level of quality you get with native apps!</p>\n<h2>Why Progressive web app?</h2>\n<p>Real wealth wanted to keep it web based\noffline\napp shell</p>\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 59.63541666666667%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAP/2gAMAwEAAhADEAAAAaYttWWKPAf/xAAbEAACAwADAAAAAAAAAAAAAAABAgADBBITIv/aAAgBAQABBQI3lj2NORmFQZp8pUxK/wD/xAAZEQABBQAAAAAAAAAAAAAAAAAAAQIREiH/2gAIAQMBAT8BVk6UP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAeEAACAAYDAAAAAAAAAAAAAAAAAQIQESEiMTJRsf/aAAgBAQAGPwLbOTlHVdGKRfw//8QAGxABAAICAwAAAAAAAAAAAAAAAQARIUFRcZH/2gAIAQEAAT8hRUZ3HR6RZuonqMVeg4zUVNHPCf/aAAwDAQACAAMAAAAQrD//xAAXEQEBAQEAAAAAAAAAAAAAAAABABHh/9oACAEDAQE/EGcTvL//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QTGP/xAAeEAACAgEFAQAAAAAAAAAAAAABEQAhMUFRYZGh0f/aAAgBAQABPxBHg3TPcsep8hQVjlos6+wzgKAdqjBPgRoBx3MFBOBDif/Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Real Wealth Media - Kyleah Parsons" title="" src="/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-ca545.jpg" srcset="/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-aa1b7.jpg 148w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-b937a.jpg 295w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-ca545.jpg 590w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-75639.jpg 885w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-8bd51.jpg 1180w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-a3716.jpg 1770w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-a707d.jpg 1920w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n<h2>WordPress Data</h2>\n<p>Thought the polymer app is purely front-end, there is a WordPress site that the Real Wealth team uses to manage the podcast library, users, and all sorts of data that is fed to the app. This is made possible by using the WP-JSON API, which is now part of the WordPress core! Very exciting stuff.</p>\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 59.63541666666667%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAdlicg6i/8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACAxIEBTIh/9oACAEBAAEFAsUmVMFietd6oTZz+v/EABcRAQADAAAAAAAAAAAAAAAAAAABERL/2gAIAQMBAT8BpmH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAdEAACAgEFAAAAAAAAAAAAAAAAAQIRIQMjQYGh/9oACAEBAAY/ApW3ih3FqvR7DZqdE74Y8s//xAAcEAACAwADAQAAAAAAAAAAAAABIQARMUFRYcH/2gAIAQEAAT8hcIhmVkKVAm4UCh1uJI9/UOI2EsKtjz7P/9oADAMBAAIAAwAAABCzz//EABgRAQEAAwAAAAAAAAAAAAAAAAEAESFh/9oACAEDAQE/EMHaXMv/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EHjhT//EABwQAAIDAQADAAAAAAAAAAAAAAERACExQbHR8P/aAAgBAQABPxAQAAUF1F+IB/JEEuw/rgohCgL13OwqC+AQyDSp0ZZ9SlkGp6tP/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Real Wealth Media Podcast Library" title="" src="/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-a408b.png" srcset="/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-4eabf.png 148w,\n/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-5a375.png 295w,\n/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-a408b.png 590w,\n/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-9a0cc.png 885w,\n/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-aa987.png 1180w,\n/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-0c07a.png 1770w,\n/static/realwealthmedia-polymer-podcast-library-af6b9bea35360286ac1c19a5820aee21-c32f9.png 1920w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 59.63541666666667%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAP/2gAMAwEAAhADEAAAAaYttWWKPAf/xAAbEAACAwADAAAAAAAAAAAAAAABAgADBBITIv/aAAgBAQABBQI3lj2NORmFQZp8pUxK/wD/xAAZEQABBQAAAAAAAAAAAAAAAAAAAQIREiH/2gAIAQMBAT8BVk6UP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAeEAACAAYDAAAAAAAAAAAAAAAAAQIQESEiMTJRsf/aAAgBAQAGPwLbOTlHVdGKRfw//8QAGxABAAICAwAAAAAAAAAAAAAAAQARIUFRcZH/2gAIAQEAAT8hRUZ3HR6RZuonqMVeg4zUVNHPCf/aAAwDAQACAAMAAAAQrD//xAAXEQEBAQEAAAAAAAAAAAAAAAABABHh/9oACAEDAQE/EGcTvL//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QTGP/xAAeEAACAgEFAQAAAAAAAAAAAAABEQAhMUFRYZGh0f/aAAgBAQABPxBHg3TPcsep8hQVjlos6+wzgKAdqjBPgRoBx3MFBOBDif/Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Real Wealth Media - Kyleah Parsons" title="" src="/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-ca545.jpg" srcset="/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-aa1b7.jpg 148w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-b937a.jpg 295w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-ca545.jpg 590w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-75639.jpg 885w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-8bd51.jpg 1180w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-a3716.jpg 1770w,\n/static/realwealthmedia-polymer-kyleah-0ab2b1e2fb8685f9b5c5be154745f45e-a707d.jpg 1920w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 177.72357723577238%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAIAAAAGkY33AAAACXBIWXMAAAsSAAALEgHS3X78AAAFQElEQVRIx6WTaUzTdxjHf39A5phO5VBABaUqyiAcVvAAKbSUHpyFQrWcvS/bf2/u0oNCaS0VsEVc5wUisiDGZJsz4pYsLiaa6dQti77cTLYXMybbm0XZnlJEwmaWsSefPPl+v3m+v/+rP0L/ZQjzQyaT4+PjU1JSEBIXLyNCURYuY8ZoalbLS9YoK2I07FAp/e9nAcINVcuINzcfHDQS7OLdfXLigDbRKsj26LLc6jBd5SKr9CwAvZqbezkXmD/n59VrAfNy7hXYX357Mfv04Y0nD249fbjI7JNvYaPfX/7x3YufF8ugv3n+071ff7z//BkA9tazJxce3x5/fPvco6+u/XAvWP7k+3tXH91BlgfXAfP9t9J69xr/i7FlCL4MgCKnTUDd1xPZnw/l3fQevukrnD2Vdd0TzINI704vtbw7lzM+GwCBkqd7kqftGVf7YQdJudL7wUwfiNjJzvUXW4CoibagCBI32Rk9nyBMxkSq0hWCyRhIVbJCMCkjFC+z37hcOmphjJiYp7oPefQ0n4nm69pu5uPTp4u8nYndPN2Mn+rtpI+YkLLkDZiUHoqXUr0duR6DYsqnn/ErpkbkU17ueSfBImi44AYiWziNY272R72yy16kZL4Bk9DRMeYia3XVS+2/gEloYapSeFVyabh81FLtt7P9vTkudcFgS9DGtnOPnu0XTQxBwvSZkq0idIyxACamIQWDddoGF/XnXIKLJ5RTI2BBM3xdoonBXRYh6YSxacxNHW6XT3o3d9TD/QIY/BwK+kqQ0xEmKo7AK2STJ1mj1uLhDspQK3WoPa6NC1/mnu3XTX9IGWwtGmojeYyB62VgQiqS0fLcOuOMv/mCmzc2cPRMX5pNIhj3NJ531frtEEI/px+Hs+UEyysEExSFyume2Sv5bj33jIM+3FHi7Sr1mRgnOyEp85kOOPG841okLf4HgmWO3y6dGKoYMVeesjScdYrGPZUjZu3Ho+LxE9TB1v0O1VvKfAqSUFfI/yvzKOFyBnnAQBkwZtqkhW59dq8i16ne2yPLsEnyXVrQeU41xWMs8hize4/tdyjhGImLAkA5TErb2dmUahbuMfHTLKJMm2RXVzPRLk9qb9jdxdveXp/VI93SciTdKt5s5KR08yF/XW4mh4ipcfraSHUlsE5VvlFbHa+v3YAHLGgQ0Zoq0JsNHBCx+hq4QSJKACi/I6MXuLSFx3UUtz61WwAix67ItEpILi35uB4EcLBPCTmhrYHYI1toCqHcVBgmppJcGuinmgSwcx04bJJTk2LiE22yxbcOO9VZVglo+ECgKSQHyiHCoo2aqk2a6gg5M1JVEatlg35PzlyvLIe9QVURjbMgX6csAxujZm1r4SIBOQDWVIAJyfts0lQTP8siyTCLCK11eQ7Vzrb6A3YFkGYSpHcLEwycnB75rvYGulsvssgT8XIkKERYY8EqEXV/j5zqNuTYZKR+DdEqKXBqErQ123MydhwixqYnEw5m7cwlAjvouZc+Pd92hHHS04p4gTIpREDeqq+NwSuTWriEFu5GnLWjtW6Lhk0oPpTNZmaUF2VzSvZW0faxGdvKSV2DvY4eV6O4GfEKENZAChWQtxmObNXVxqgqk4zcTTgrua0hQc/ZqqvZoq0hGLnxmupEPSfJeBSejldV7hGzwuryg+X8VUIK2akB0jp5FJeW7jYW9Kszu4UkB55lFhX2a9JN/HwHTrSIaW5DukkQp64KNHkkhN4NRxELrI58f1EDIWtWr90UtTSJiF4PvEmWTmZm5lIbFRWVkJCwNImdn0X7F88z4CqVvmIlAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Real Wealth Media - Kyleah Parsons - mobile" title="" src="/static/realwealthmedia-polymer-mobile-38e422a54a0c1814f797136099de94a5-a408b.png" srcset="/static/realwealthmedia-polymer-mobile-38e422a54a0c1814f797136099de94a5-4eabf.png 148w,\n/static/realwealthmedia-polymer-mobile-38e422a54a0c1814f797136099de94a5-5a375.png 295w,\n/static/realwealthmedia-polymer-mobile-38e422a54a0c1814f797136099de94a5-a408b.png 590w,\n/static/realwealthmedia-polymer-mobile-38e422a54a0c1814f797136099de94a5-87dc8.png 615w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 177.72357723577238%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,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&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Real Wealth Media - Kyleah Parsons - mobile" title="" src="/static/realwealthmedia-polymer-mobile-1-76c925ccc77da115f4c1e4cb9d1a0a21-a408b.png" srcset="/static/realwealthmedia-polymer-mobile-1-76c925ccc77da115f4c1e4cb9d1a0a21-4eabf.png 148w,\n/static/realwealthmedia-polymer-mobile-1-76c925ccc77da115f4c1e4cb9d1a0a21-5a375.png 295w,\n/static/realwealthmedia-polymer-mobile-1-76c925ccc77da115f4c1e4cb9d1a0a21-a408b.png 590w,\n/static/realwealthmedia-polymer-mobile-1-76c925ccc77da115f4c1e4cb9d1a0a21-87dc8.png 615w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  ',frontmatter:{path:"/real-wealth-media",title:"Real Wealth Media - A Progressive Web App",featuredImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAaYusOWKPEn/xAAbEAACAgMBAAAAAAAAAAAAAAABAgAEAxITIv/aAAgBAQABBQLuzTo02MpoNrPlMTEr/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECERIh/9oACAEDAQE/AVZOlD//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8BrX//xAAdEAACAAcBAAAAAAAAAAAAAAAAAQMQISIxMoGx/9oACAEBAAY/Ass2conC1Ir4f//EABsQAAMBAAMBAAAAAAAAAAAAAAABESExQVGR/9oACAEBAAE/IfDxbo+j6Dc7CUasfIl8DzYNTh74P//aAAwDAQACAAMAAAAQBD//xAAXEQEBAQEAAAAAAAAAAAAAAAABABHh/9oACAEDAQE/EGcTvL//xAAWEQADAAAAAAAAAAAAAAAAAAABECH/2gAIAQIBAT8Qgp//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMWGhQZHR/9oACAEBAAE/EGpdU5H1MjtPkULJ3dNvnuPp8g5ORhfBOAXLuYqLoo4n/9k=",aspectRatio:1.6768558951965065,src:"/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-f2ac0.jpg",srcSet:"/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-567e3.jpg 158w,\n/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-c3206.jpg 315w,\n/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-f2ac0.jpg 630w,\n/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-0c4a5.jpg 945w,\n/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-211f3.jpg 1260w,\n/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-0150a.jpg 1890w,\n/static/realwealthmedia-polymer-jim-silbernagel-f8286e1fbef70740f83f403ddd6b7ad7-787be.jpg 1920w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---real-wealth-media-82ce5d358744de62ba7d.js.map