self["webpackHotUpdate_N_E"]("pages/channel",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Programacion\\nextJS\\pages\\channel.js",
    _this = undefined;





var channel = function channel(_ref) {
  var channel = _ref.channel,
      audio_clips = _ref.audio_clips,
      channels = _ref.channels;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3407761901",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "http://localhost:3000",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "jsx-3407761901",
        children: "Podcasts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
      },
      className: "jsx-3407761901" + " " + "banner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jsx-3407761901",
      children: channel.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), channels.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "jsx-3407761901",
        children: "Series"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          justifyContent: "space-around"
        },
        className: "jsx-3407761901",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3407761901" + " " + "channels",
          children: channels.map(function (serie) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/channel?id=".concat(serie.id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "jsx-3407761901" + " " + "channel",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: serie.urls.logo_image.original,
                  alt: "",
                  className: "jsx-3407761901"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "jsx-3407761901",
                  children: serie.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "jsx-3407761901",
      children: "Ultimos Podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), audio_clips.map(function (clip) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/podcast?id=".concat(clip.id),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "jsx-3407761901" + " " + "podcast",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "jsx-3407761901",
            children: clip.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-3407761901" + " " + "meta",
            children: [Math.ceil(clip.duration / 60), " minutes"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)
      }, clip.id, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2786537740",
      children: "header.jsx-3407761901{color:#fff;background:#8756ca;padding:15px;text-align:center;}.banner.jsx-3407761901{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.channels.jsx-3407761901{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-3407761901{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-3407761901 img.jsx-3407761901{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h1.jsx-3407761901,h2.jsx-3407761901{color:#fff;background:#8756ca;}h1.jsx-3407761901{font-weight:600;padding:15px;}h2.jsx-3407761901{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}.podcast.jsx-3407761901{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3407761901:hover{color:#000;}.podcast.jsx-3407761901 h3.jsx-3407761901{margin:0;}.podcast.jsx-3407761901 .meta.jsx-3407761901{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXG5leHRKU1xccGFnZXNcXGNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZrQixBQUdzQixBQU9BLEFBUUUsQUFNQyxBQU1JLEFBT1AsQUFLSyxBQUlKLEFBUUUsQUFRSCxBQUdGLEFBR0UsU0FGYixFQTlEcUIsQUFPQSxBQTJCQSxBQXlCckIsQUFNbUIsQ0F0QkQsQ0E1QkYsQ0FNTSxBQThCQyxFQVpSLEVBWjhCLFNBWDlCLENBNEJHLEFBc0JBLENBMUJsQixDQXZDZSxBQU9lLEFBMkI5QixJQWJhLE1BTGlELEdBZjFDLENBMkNULEFBc0JYLENBNUN1QixRQXVCSCxLQXJDSSxBQW1CWCxHQXpCYixHQWlEYSxLQXZCYixFQWtCQSxJQU1lLEtBM0NTLFFBNENxQixPQTlCN0MsR0FOQSxJQVBBLDBCQTRDaUIsZUFDakIiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcbmV4dEpTXFxwYWdlc1xcY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBnZXRDaGFubmVscyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGxldCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWR9YCk7XHJcbiAgbGV0IHsgY2hhbm5lbCB9ID0gZGF0YS5kYXRhLmJvZHk7XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBhdWRpb0NsaXBzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgbGV0IGF1ZGlvQ2xpcHMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkfS9hdWRpb19jbGlwc2BcclxuICApO1xyXG4gIGxldCB7IGF1ZGlvX2NsaXBzIH0gPSBhdWRpb0NsaXBzLmRhdGEuYm9keTtcclxuICByZXR1cm4gYXVkaW9fY2xpcHM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGlsZENoYW5uZWxzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgbGV0IGNoaWxkX2NoYW5uZWxzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZH0vY2hpbGRfY2hhbm5lbHNgXHJcbiAgKTtcclxuICBsZXQgeyBjaGFubmVscyB9ID0gY2hpbGRfY2hhbm5lbHMuZGF0YS5ib2R5O1xyXG4gIHJldHVybiBjaGFubmVscztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgbGV0IGlkID0gcXVlcnkuaWQ7XHJcblxyXG4gIGxldCBbY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGdldENoYW5uZWxzKGlkKSxcclxuICAgIGF1ZGlvQ2xpcHMoaWQpLFxyXG4gICAgZ2V0Q2hpbGRDaGFubmVscyhpZCksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscyB9IH07XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5uZWwgPSAoeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI+XHJcbiAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFubmVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICB7Y2hhbm5lbHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMj5TZXJpZXM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XHJcbiAgICAgICAgICAgICAge2NoYW5uZWxzLm1hcCgoc2VyaWUpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke3NlcmllLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3NlcmllLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj5cclxuICAgICAge2F1ZGlvX2NsaXBzLm1hcCgoY2xpcCkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9kY2FzdD9pZD0ke2NsaXAuaWR9YH0ga2V5PXtjbGlwLmlkfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvZGNhc3RcIj5cclxuICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPntNYXRoLmNlaWwoY2xpcC5kdXJhdGlvbiAvIDYwKX0gbWludXRlczwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhLmNoYW5uZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvZGNhc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9kY2FzdDpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvZGNhc3QgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9kY2FzdCAubWV0YSB7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhbm5lbDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\nextJS\\\\pages\\\\channel.js */"
    }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1768601800",
      children: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXG5leHRKU1xccGFnZXNcXGNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkp5QixBQUdvQixTQUNhLHNCQUNMLGlCQUNuQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxuZXh0SlNcXHBhZ2VzXFxjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGdldENoYW5uZWxzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZH1gKTtcclxuICBsZXQgeyBjaGFubmVsIH0gPSBkYXRhLmRhdGEuYm9keTtcclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGF1ZGlvQ2xpcHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBsZXQgYXVkaW9DbGlwcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWR9L2F1ZGlvX2NsaXBzYFxyXG4gICk7XHJcbiAgbGV0IHsgYXVkaW9fY2xpcHMgfSA9IGF1ZGlvQ2xpcHMuZGF0YS5ib2R5O1xyXG4gIHJldHVybiBhdWRpb19jbGlwcztcclxufTtcclxuXHJcbmNvbnN0IGdldENoaWxkQ2hhbm5lbHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBsZXQgY2hpbGRfY2hhbm5lbHMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkfS9jaGlsZF9jaGFubmVsc2BcclxuICApO1xyXG4gIGxldCB7IGNoYW5uZWxzIH0gPSBjaGlsZF9jaGFubmVscy5kYXRhLmJvZHk7XHJcbiAgcmV0dXJuIGNoYW5uZWxzO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICBsZXQgaWQgPSBxdWVyeS5pZDtcclxuXHJcbiAgbGV0IFtjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZ2V0Q2hhbm5lbHMoaWQpLFxyXG4gICAgYXVkaW9DbGlwcyhpZCksXHJcbiAgICBnZXRDaGlsZENoYW5uZWxzKGlkKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzIH0gfTtcclxufVxyXG5cclxuY29uc3QgY2hhbm5lbCA9ICh7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIj5cclxuICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cclxuXHJcbiAgICAgIHtjaGFubmVscy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIiwgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cclxuICAgICAgICAgICAgICB7Y2hhbm5lbHMubWFwKChzZXJpZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7c2VyaWUuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57c2VyaWUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdHM8L2gyPlxyXG4gICAgICB7YXVkaW9fY2xpcHMubWFwKChjbGlwKSA9PiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfSBrZXk9e2NsaXAuaWR9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxyXG4gICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+e01hdGguY2VpbChjbGlwLmR1cmF0aW9uIC8gNjApfSBtaW51dGVzPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYW5uZWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEuY2hhbm5lbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSxcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9kY2FzdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2RjYXN0OmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9kY2FzdCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFubmVsO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\nextJS\\\\pages\\\\channel.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (channel);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6WyJjaGFubmVsIiwiYXVkaW9fY2xpcHMiLCJjaGFubmVscyIsImJhY2tncm91bmRJbWFnZSIsInVybHMiLCJiYW5uZXJfaW1hZ2UiLCJvcmlnaW5hbCIsInRpdGxlIiwibGVuZ3RoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFwIiwic2VyaWUiLCJpZCIsImxvZ29faW1hZ2UiLCJjbGlwIiwiTWF0aCIsImNlaWwiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQW9DQSxJQUFNQSxPQUFPLEdBQUcsdUJBQXdDO0FBQUEsTUFBckNBLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTVCQyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEQsc0JBQ0U7QUFBQTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLHVCQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLHVCQUFlLGdCQUFTSCxPQUFPLENBQUNJLElBQVIsQ0FBYUMsWUFBYixDQUEwQkMsUUFBbkM7QUFEVixPQUZUO0FBQUEsMENBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFZRTtBQUFBO0FBQUEsZ0JBQUtOLE9BQU8sQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsRUFjR0wsUUFBUSxDQUFDTSxNQUFULEdBQWtCLENBQWxCLGlCQUNDO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxhQUFLLEVBQUU7QUFBQ0MsaUJBQU8sRUFBQyxNQUFUO0FBQWlCQyx3QkFBYyxFQUFDO0FBQWhDLFNBQVo7QUFBQTtBQUFBLCtCQUNFO0FBQUEsOENBQWUsVUFBZjtBQUFBLG9CQUNHUixRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDQyxLQUFEO0FBQUEsZ0NBQ1osOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSx3QkFBaUJBLEtBQUssQ0FBQ0MsRUFBdkIsQ0FBVjtBQUFBLHFDQUNFO0FBQUEsb0RBQWEsU0FBYjtBQUFBLHdDQUNFO0FBQUsscUJBQUcsRUFBRUQsS0FBSyxDQUFDUixJQUFOLENBQVdVLFVBQVgsQ0FBc0JSLFFBQWhDO0FBQTBDLHFCQUFHLEVBQUMsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBO0FBQUEsNEJBQUtNLEtBQUssQ0FBQ0w7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFk7QUFBQSxXQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQWZKLGVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0YsRUFpQ0dOLFdBQVcsQ0FBQ1UsR0FBWixDQUFnQixVQUFDSSxJQUFEO0FBQUEsMEJBQ2YsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLHdCQUFpQkEsSUFBSSxDQUFDRixFQUF0QixDQUFWO0FBQUEsK0JBQ0U7QUFBQSw4Q0FBYSxTQUFiO0FBQUEsa0NBQ0U7QUFBQTtBQUFBLHNCQUFLRSxJQUFJLENBQUNSO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsZ0RBQWUsTUFBZjtBQUFBLHVCQUF1QlMsSUFBSSxDQUFDQyxJQUFMLENBQVVGLElBQUksQ0FBQ0csUUFBTCxHQUFnQixFQUExQixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBMkNILElBQUksQ0FBQ0YsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBaEIsQ0FqQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2SEQsQ0E5SEQ7OztBQWdJQSwrREFBZWIsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFubmVsLjAyOTU1NDBjMDQyMjMwNzJjYzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkfWApO1xyXG4gIGxldCB7IGNoYW5uZWwgfSA9IGRhdGEuZGF0YS5ib2R5O1xyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgYXVkaW9DbGlwcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGxldCBhdWRpb0NsaXBzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZH0vYXVkaW9fY2xpcHNgXHJcbiAgKTtcclxuICBsZXQgeyBhdWRpb19jbGlwcyB9ID0gYXVkaW9DbGlwcy5kYXRhLmJvZHk7XHJcbiAgcmV0dXJuIGF1ZGlvX2NsaXBzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hpbGRDaGFubmVscyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGxldCBjaGlsZF9jaGFubmVscyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWR9L2NoaWxkX2NoYW5uZWxzYFxyXG4gICk7XHJcbiAgbGV0IHsgY2hhbm5lbHMgfSA9IGNoaWxkX2NoYW5uZWxzLmRhdGEuYm9keTtcclxuICByZXR1cm4gY2hhbm5lbHM7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gIGxldCBpZCA9IHF1ZXJ5LmlkO1xyXG5cclxuICBsZXQgW2NoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBnZXRDaGFubmVscyhpZCksXHJcbiAgICBhdWRpb0NsaXBzKGlkKSxcclxuICAgIGdldENoaWxkQ2hhbm5lbHMoaWQpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMgfSB9O1xyXG59XHJcblxyXG5jb25zdCBjaGFubmVsID0gKHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiPlxyXG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxyXG5cclxuICAgICAge2NoYW5uZWxzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDI+U2VyaWVzPC9oMj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgICAgICAgIHtjaGFubmVscy5tYXAoKHNlcmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtzZXJpZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZXJpZS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntzZXJpZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgIHthdWRpb19jbGlwcy5tYXAoKGNsaXApID0+IChcclxuICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3Q/aWQ9JHtjbGlwLmlkfWB9IGtleT17Y2xpcC5pZH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XHJcbiAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj57TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXM8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5jaGFubmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYW5uZWwgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb2RjYXN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvZGNhc3Q6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2RjYXN0IGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvZGNhc3QgLm1ldGEge1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYW5uZWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=