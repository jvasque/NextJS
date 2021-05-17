(function() {
var exports = {};
exports.id = "pages/channel";
exports.ids = ["pages/channel"];
exports.modules = {

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\NextJS\\pages\\channel.js";





const getChannels = async id => {
  let data = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://api.audioboom.com/channels/${id}`);
  let {
    channel
  } = data.data.body;
  return channel;
};

const audioClips = async id => {
  let audioClips = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://api.audioboom.com/channels/${id}/audio_clips`);
  let {
    audio_clips
  } = audioClips.data.body;
  return audio_clips;
};

const getChildChannels = async id => {
  let child_channels = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://api.audioboom.com/channels/${id}/child_channels`);
  let {
    channels
  } = child_channels.data.body;
  return channels;
};

async function getServerSideProps({
  query
}) {
  let id = query.id;
  let [channel, audio_clips, channels] = await Promise.all([getChannels(id), audioClips(id), getChildChannels(id)]);
  return {
    props: {
      channel,
      audio_clips,
      channels
    }
  };
}

const channel = ({
  channel,
  audio_clips,
  channels
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-1947562413",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "http://localhost:3000",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "jsx-1947562413",
        children: "Podcasts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backgroundImage: `url(${channel.urls.banner_image.original})`
      },
      className: "jsx-1947562413" + " " + "banner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jsx-1947562413",
      children: channel.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), channels.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "jsx-1947562413",
        children: "Series"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "35%"
        },
        className: "jsx-1947562413",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-1947562413" + " " + "channels",
          children: channels.map(serie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/channel?id=${serie.id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "jsx-1947562413" + " " + "channel",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: serie.urls.logo_image.original,
                alt: "",
                className: "jsx-1947562413"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "jsx-1947562413",
                children: serie.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "jsx-1947562413",
      children: "Ultimos Podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), audio_clips.map(clip => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/podcast?id=${clip.id}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "jsx-1947562413" + " " + "podcast",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "jsx-1947562413",
          children: clip.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-1947562413" + " " + "meta",
          children: [Math.ceil(clip.duration / 60), " minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined)
    }, clip.id, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1947562413",
      children: "header.jsx-1947562413{color:#fff;background:#8756ca;padding:15px;text-align:center;cursor:pointer;}.banner.jsx-1947562413{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.channels.jsx-1947562413{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-1947562413{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-1947562413 img.jsx-1947562413{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h1.jsx-1947562413,h2.jsx-1947562413{color:#fff;background:#8756ca;text-align:center;}h1.jsx-1947562413{font-weight:600;padding:15px;}h2.jsx-1947562413{padding:5px;font-size:0.9em;font-weight:600;margin:0;}.podcast.jsx-1947562413{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-1947562413:hover{color:#000;}.podcast.jsx-1947562413 h3.jsx-1947562413{margin:0;}.podcast.jsx-1947562413 .meta.jsx-1947562413{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0SlNcXHBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ga0IsQUFHc0IsQUFRQSxBQVFFLEFBTUMsQUFNSSxBQU9QLEFBTUssQUFJSixBQVFFLEFBUUgsQUFHRixBQUdFLFNBRmIsRUFoRXFCLEFBUUEsQUEyQkEsQUEwQnJCLEFBTW1CLENBdEJELENBN0JGLENBTU0sQUErQkMsRUFaUixFQWI4QixTQVg5QixDQTZCRyxBQXNCQSxDQTFCbEIsQ0F6Q2UsQUFRZSxBQTJCVixJQWJQLE1BTGlELEdBaEIxQyxDQTZDVCxBQXNCWCxDQTdDdUIsR0FhdkIsS0FZQSxLQXZDd0IsQUFtQlgsR0ExQkcsR0FtREgsS0F4QmIsTUF5QmUsQ0FuRGYsSUFPd0IsUUE2Q3FCLE9BL0I3QyxHQU5BLElBUEEsMEJBNkNpQixlQUNqQiIsImZpbGUiOiJEOlxcTmV4dEpTXFxwYWdlc1xcY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkfWApO1xyXG4gIGxldCB7IGNoYW5uZWwgfSA9IGRhdGEuZGF0YS5ib2R5O1xyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgYXVkaW9DbGlwcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGxldCBhdWRpb0NsaXBzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZH0vYXVkaW9fY2xpcHNgXHJcbiAgKTtcclxuICBsZXQgeyBhdWRpb19jbGlwcyB9ID0gYXVkaW9DbGlwcy5kYXRhLmJvZHk7XHJcbiAgcmV0dXJuIGF1ZGlvX2NsaXBzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hpbGRDaGFubmVscyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGxldCBjaGlsZF9jaGFubmVscyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWR9L2NoaWxkX2NoYW5uZWxzYFxyXG4gICk7XHJcbiAgbGV0IHsgY2hhbm5lbHMgfSA9IGNoaWxkX2NoYW5uZWxzLmRhdGEuYm9keTtcclxuICByZXR1cm4gY2hhbm5lbHM7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gIGxldCBpZCA9IHF1ZXJ5LmlkO1xyXG5cclxuICBsZXQgW2NoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBnZXRDaGFubmVscyhpZCksXHJcbiAgICBhdWRpb0NsaXBzKGlkKSxcclxuICAgIGdldENoaWxkQ2hhbm5lbHMoaWQpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMgfSB9O1xyXG59XHJcblxyXG5jb25zdCBjaGFubmVsID0gKHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiPlxyXG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxyXG5cclxuICAgICAge2NoYW5uZWxzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDI+U2VyaWVzPC9oMj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCBtYXJnaW5MZWZ0OlwiMzUlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgICAgICAgIHtjaGFubmVscy5tYXAoKHNlcmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtzZXJpZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZXJpZS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntzZXJpZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgIHthdWRpb19jbGlwcy5tYXAoKGNsaXApID0+IChcclxuICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3Q/aWQ9JHtjbGlwLmlkfWB9IGtleT17Y2xpcC5pZH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XHJcbiAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj57TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXM8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhLmNoYW5uZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb2RjYXN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvZGNhc3Q6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2RjYXN0IGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvZGNhc3QgLm1ldGEge1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFubmVsO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\NextJS\\\\pages\\\\channel.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (channel);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/channel.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0SlMvLi9wYWdlcy9jaGFubmVsLmpzIiwid2VicGFjazovL25leHRKUy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dEpTL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vbmV4dEpTL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0SlMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0SlMvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiZ2V0Q2hhbm5lbHMiLCJpZCIsImRhdGEiLCJheGlvcyIsImNoYW5uZWwiLCJib2R5IiwiYXVkaW9DbGlwcyIsImF1ZGlvX2NsaXBzIiwiZ2V0Q2hpbGRDaGFubmVscyIsImNoaWxkX2NoYW5uZWxzIiwiY2hhbm5lbHMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsIlByb21pc2UiLCJhbGwiLCJwcm9wcyIsImJhY2tncm91bmRJbWFnZSIsInVybHMiLCJiYW5uZXJfaW1hZ2UiLCJvcmlnaW5hbCIsInRpdGxlIiwibGVuZ3RoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsIm1hcCIsInNlcmllIiwibG9nb19pbWFnZSIsImNsaXAiLCJNYXRoIiwiY2VpbCIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLFdBQVcsR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDaEMsTUFBSUMsSUFBSSxHQUFHLE1BQU1DLGdEQUFBLENBQVcsc0NBQXFDRixFQUFHLEVBQW5ELENBQWpCO0FBQ0EsTUFBSTtBQUFFRztBQUFGLE1BQWNGLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxJQUE1QjtBQUNBLFNBQU9ELE9BQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1FLFVBQVUsR0FB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QUFBQTtBQUFBLGlCQWhDRixFQWlDR2IsV0FBVyxDQUFDa0IsR0FBWixDQUFpQkcsSUFBRCxpQkFDZiw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxlQUFjQSxJQUFJLENBQUMzQixFQUFHLEVBQW5DO0FBQUEsNkJBQ0U7QUFBQSw0Q0FBYSxTQUFiO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLG9CQUFLMkIsSUFBSSxDQUFDUjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLDhDQUFlLE1BQWY7QUFBQSxxQkFBdUJTLElBQUksQ0FBQ0MsSUFBTCxDQUFVRixJQUFJLENBQUNHLFFBQUwsR0FBZ0IsRUFBMUIsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQTJDSCxJQUFJLENBQUMzQixFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBakNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUhELENBMUhEOztBQTRIQSwrREFBZUcsT0FBZixFOzs7Ozs7Ozs7OztBQ25LQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuXHJcblxyXG5jb25zdCBnZXRDaGFubmVscyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGxldCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWR9YCk7XHJcbiAgbGV0IHsgY2hhbm5lbCB9ID0gZGF0YS5kYXRhLmJvZHk7XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBhdWRpb0NsaXBzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgbGV0IGF1ZGlvQ2xpcHMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkfS9hdWRpb19jbGlwc2BcclxuICApO1xyXG4gIGxldCB7IGF1ZGlvX2NsaXBzIH0gPSBhdWRpb0NsaXBzLmRhdGEuYm9keTtcclxuICByZXR1cm4gYXVkaW9fY2xpcHM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGlsZENoYW5uZWxzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgbGV0IGNoaWxkX2NoYW5uZWxzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZH0vY2hpbGRfY2hhbm5lbHNgXHJcbiAgKTtcclxuICBsZXQgeyBjaGFubmVscyB9ID0gY2hpbGRfY2hhbm5lbHMuZGF0YS5ib2R5O1xyXG4gIHJldHVybiBjaGFubmVscztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgbGV0IGlkID0gcXVlcnkuaWQ7XHJcblxyXG4gIGxldCBbY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGdldENoYW5uZWxzKGlkKSxcclxuICAgIGF1ZGlvQ2xpcHMoaWQpLFxyXG4gICAgZ2V0Q2hpbGRDaGFubmVscyhpZCksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscyB9IH07XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5uZWwgPSAoeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI+XHJcbiAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFubmVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICB7Y2hhbm5lbHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMj5TZXJpZXM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIG1hcmdpbkxlZnQ6XCIzNSVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XHJcbiAgICAgICAgICAgICAge2NoYW5uZWxzLm1hcCgoc2VyaWUpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke3NlcmllLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3NlcmllLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj5cclxuICAgICAge2F1ZGlvX2NsaXBzLm1hcCgoY2xpcCkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9kY2FzdD9pZD0ke2NsaXAuaWR9YH0ga2V5PXtjbGlwLmlkfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvZGNhc3RcIj5cclxuICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPntNYXRoLmNlaWwoY2xpcC5kdXJhdGlvbiAvIDYwKX0gbWludXRlczwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYW5uZWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEuY2hhbm5lbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSxcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvZGNhc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9kY2FzdDpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvZGNhc3QgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9kY2FzdCAubWV0YSB7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYW5uZWw7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=