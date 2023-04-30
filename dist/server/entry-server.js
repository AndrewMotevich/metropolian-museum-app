import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { useEffect, Fragment, useState, useRef } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Link, useLocation, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const App$1 = "";
const _404page = "";
const Page404 = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { className: "wrongPage", children: "404 Not found" }) });
};
const AboutUsPage = "";
const AboutUs = () => {
  return /* @__PURE__ */ jsx("div", { className: "aboutUsWrapper", children: /* @__PURE__ */ jsxs("div", { className: "aboutUs", children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("a", { href: "https://metmuseum.github.io/", children: "The Metropolitan Museum of Art Collection API" }),
    /* @__PURE__ */ jsx("p", { children: "This App use free Api from The Metropolitan Museum of Art" }),
    /* @__PURE__ */ jsx("p", { children: "The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks in its Collection for unrestricted commercial and noncommercial use." })
  ] }) });
};
const myInput = "_myInput_1ybkz_1";
const classes$8 = {
  myInput
};
const modalObject = {
  title: "",
  objectID: 0,
  primaryImage: "",
  primaryImageSmall: "",
  artistDisplayName: "",
  artistDisplayBio: "",
  artistNationality: "",
  artistBeginDate: "",
  artistEndDate: "",
  objectDate: "",
  objectName: "",
  geoLocation: ""
};
const initialState$1 = { savedValue: "", currentValue: "", modalObject };
const searchSlice = createSlice({
  name: "search",
  initialState: initialState$1,
  reducers: {
    addSavedQstring: (state, action) => {
      state.savedValue = action.payload;
    },
    addCurrentQstring: (state, action) => {
      state.currentValue = action.payload;
    },
    addModalObject: (state, action) => {
      state.modalObject = action.payload;
    }
  }
});
const { addSavedQstring, addCurrentQstring, addModalObject } = searchSlice.actions;
const searchReducer = searchSlice.reducer;
const MyInputWithHooks = (params) => {
  const savedValue = localStorage.getItem(`${params["query-name"]}`) || "Vincent";
  const currentQuery = useSelector((state) => state.search.currentValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCurrentQstring(savedValue));
    dispatch(addSavedQstring(savedValue));
  }, []);
  function onChange(e) {
    const newValue = e.target.value;
    dispatch(addCurrentQstring(newValue));
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: params.type,
        placeholder: params.placeholder,
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            localStorage.setItem(`${params["query-name"]}`, `${currentQuery}`);
            dispatch(addSavedQstring(e.target.value));
          }
        },
        onChange: (e) => onChange(e),
        value: currentQuery,
        className: classes$8.myInput
      }
    ),
    /* @__PURE__ */ jsx("p", { style: { color: "red" }, children: "Example of search: Statuette, Vincent Van Gogh, Paul Gauguin, Monk, The card player" })
  ] });
};
const myCard = "_myCard_4vbv2_1";
const myCardImage = "_myCardImage_4vbv2_31";
const myCardTitle = "_myCardTitle_4vbv2_51";
const classes$7 = {
  myCard,
  myCardImage,
  myCardTitle
};
const loadingWrapper = "_loadingWrapper_1lk4k_1";
const loading = "_loading_1lk4k_1";
const spin = "_spin_1lk4k_1";
const classes$6 = {
  loadingWrapper,
  loading,
  spin
};
const Loading = () => {
  return /* @__PURE__ */ jsxs("div", { className: classes$6.loadingWrapper, children: [
    /* @__PURE__ */ jsx("h2", { children: "Loading..." }),
    /* @__PURE__ */ jsx("div", { className: classes$6.loading })
  ] });
};
const paintingApi = createApi({
  reducerPath: "paintingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1/"
  }),
  endpoints: (builder) => ({
    searchPaintings: builder.query({
      query: (qstring) => `search?&hasImages=true&isOnView=true&q=${qstring}`
    }),
    getPainting: builder.query({
      query: (id) => `objects/${id}`
    })
  })
});
const { useSearchPaintingsQuery, useGetPaintingQuery } = paintingApi;
const MyCard = (props) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPaintingQuery(props.elem);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes$7.myCard,
      onClick: () => {
        props.modal(true);
        if (!isLoading && data !== void 0) {
          dispatch(addModalObject(data));
        }
      },
      children: isLoading ? /* @__PURE__ */ jsx(Loading, {}) : error ? /* @__PURE__ */ jsx("div", { children: "Error to fetch data" }) : /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            background: "white",
            backgroundImage: `url(${(data == null ? void 0 : data.primaryImageSmall) ? data == null ? void 0 : data.primaryImageSmall : "../../../../public/assets/img/no-image-icon.png"})`
          },
          className: classes$7.myCardImage,
          children: /* @__PURE__ */ jsx("div", { className: classes$7.myCardTitle, children: data == null ? void 0 : data.title })
        }
      )
    }
  );
};
const modalWrapper = "_modalWrapper_1vx57_1";
const modalWindow = "_modalWindow_1vx57_23";
const modalWindowCross = "_modalWindowCross_1vx57_35";
const classes$5 = {
  modalWrapper,
  modalWindow,
  modalWindowCross
};
const Modal = (props) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: props.visible ? { visibility: "visible" } : { visibility: "hidden" },
      className: classes$5.modalWrapper,
      onClick: (e) => {
        e.stopPropagation();
        props.setVisible(false);
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: classes$5.modalWindow,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: classes$5.modalWindowCross,
                onClick: () => {
                  props.setVisible(false);
                }
              }
            ),
            props.children
          ]
        }
      )
    }
  );
};
const modalWindowImg = "_modalWindowImg_trz6i_1";
const modalWindowLayout = "_modalWindowLayout_trz6i_15";
const modalWindowList = "_modalWindowList_trz6i_31";
const classes$4 = {
  modalWindowImg,
  modalWindowLayout,
  modalWindowList
};
const MyModal = () => {
  const { modalObject: modalObject2 } = useSelector((state) => state.search);
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: classes$4.modalWindowLayout, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: classes$4.modalWindowImg,
        style: {
          backgroundImage: `url(${modalObject2.primaryImage})`
        }
      }
    ),
    /* @__PURE__ */ jsxs("ul", { className: classes$4.modalWindowList, children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { children: "Object name:" }),
        " ",
        modalObject2.title
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { children: "Object type:" }),
        " ",
        modalObject2.objectName
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { children: "Artist name:" }),
        " ",
        modalObject2.artistDisplayName
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { children: "Artist nationality:" }),
        " ",
        modalObject2.artistNationality
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { children: "Artist years of life:" }),
        " ",
        modalObject2.artistBeginDate,
        "-",
        modalObject2.artistEndDate
      ] })
    ] })
  ] }) });
};
const Cards = () => {
  var _a;
  const [modal, setModal] = useState(false);
  const { savedValue: savedQuery } = useSelector((state) => state.search);
  const { data: paintingIDs, error, isLoading: loadingIDs } = useSearchPaintingsQuery(savedQuery);
  useEffect(() => {
  }, [savedQuery]);
  return /* @__PURE__ */ jsx("div", { className: "flex-center", children: /* @__PURE__ */ jsxs("div", { className: "flex-start", children: [
    loadingIDs ? /* @__PURE__ */ jsx(Loading, {}) : error ? /* @__PURE__ */ jsx("h2", { children: "Error to fetch CardsIDs" }) : ((_a = paintingIDs == null ? void 0 : paintingIDs.objectIDs) == null ? void 0 : _a.length) !== void 0 ? paintingIDs == null ? void 0 : paintingIDs.objectIDs.map((elem, index) => {
      if (index > 11)
        return;
      return /* @__PURE__ */ jsx(MyCard, { elem, modal: setModal }, elem);
    }) : /* @__PURE__ */ jsx("h2", { children: "Not found" }),
    /* @__PURE__ */ jsx(Modal, { visible: modal, setVisible: setModal, children: /* @__PURE__ */ jsx(MyModal, {}) })
  ] }) });
};
const MainPage = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(MyInputWithHooks, { "query-name": "search2", type: "search", placeholder: "Search" }),
    /* @__PURE__ */ jsx(Cards, {})
  ] });
};
const MyNav = () => {
  return /* @__PURE__ */ jsxs("div", { className: "myNavigate", children: [
    /* @__PURE__ */ jsx(Link, { to: "/main", children: "Main" }),
    /* @__PURE__ */ jsx(Link, { to: "/about", children: "About" }),
    /* @__PURE__ */ jsx(Link, { to: "/forms", children: "Forms" })
  ] });
};
const Header = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "myHeader", children: [
    /* @__PURE__ */ jsxs("h1", { className: "headerTitle", children: [
      "Page: ",
      location.pathname.slice(1)
    ] }),
    /* @__PURE__ */ jsx(MyNav, {})
  ] });
};
const myFormCard = "_myFormCard_1lpjc_1";
const myFormCardImg = "_myFormCardImg_1lpjc_19";
const classes$3 = {
  myFormCard,
  myFormCardImg
};
const MyFormCard = ({ elem: elem2, index }) => {
  return /* @__PURE__ */ jsxs("div", { className: classes$3.myFormCard, children: [
    /* @__PURE__ */ jsx("img", { width: "80px", className: classes$3.myFormCardImg, src: elem2.img, alt: "icon" }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Name: ",
      elem2.title
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Bth date: ",
      elem2.bthDate.split("-").reverse().join("-")
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Country: ",
      elem2.country
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Human: ",
      elem2.allow ? "Yes" : "No"
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Sex: ",
      elem2.sex
    ] })
  ] }, index);
};
const myFormsCards = "_myFormsCards_28eu0_1";
const classes$2 = {
  myFormsCards
};
const MyFormCards = ({ cardsArray }) => {
  return /* @__PURE__ */ jsx("div", { className: classes$2.myFormsCards, children: cardsArray.map((elem2, index) => {
    return /* @__PURE__ */ jsx(MyFormCard, { elem: elem2, index }, index);
  }) });
};
const MyInputCountry = ({ inputRef, name, onChange }) => {
  return /* @__PURE__ */ jsxs("label", { children: [
    /* @__PURE__ */ jsx("strong", { children: "Country:" }),
    /* @__PURE__ */ jsxs("select", { ref: inputRef, name, onChange, children: [
      /* @__PURE__ */ jsx("option", { children: "Belarus" }),
      /* @__PURE__ */ jsx("option", { children: "Russia" }),
      /* @__PURE__ */ jsx("option", { children: "Poland" }),
      /* @__PURE__ */ jsx("option", { children: "German" })
    ] })
  ] });
};
const MyInputDate = ({ inputRef, name, onChange }) => {
  return /* @__PURE__ */ jsxs("label", { children: [
    /* @__PURE__ */ jsx("strong", { children: "Birthday:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        min: "1900-01-01",
        max: "2018-12-31",
        type: "date",
        ref: inputRef,
        name,
        onChange
      }
    )
  ] });
};
const MyInputCheckbox = ({ inputRef, name, onChange }) => {
  return /* @__PURE__ */ jsxs("label", { style: { display: "flex", justifyContent: "center", alignItems: "center" }, children: [
    /* @__PURE__ */ jsx("strong", { children: "Human check: " }),
    /* @__PURE__ */ jsx(
      "input",
      {
        style: { width: "40px" },
        type: "checkbox",
        ref: inputRef,
        name,
        onChange
      }
    )
  ] });
};
const MyInputText = ({ inputRef, name, onChange }) => {
  return /* @__PURE__ */ jsxs("label", { children: [
    /* @__PURE__ */ jsx("strong", { children: "Name:" }),
    /* @__PURE__ */ jsx("input", { type: "text", ref: inputRef, name, onChange })
  ] });
};
const myFormPage = "_myFormPage_agxg8_1";
const myForm = "_myForm_agxg8_1";
const hide$1 = "_hide_agxg8_29";
const classes$1 = {
  myFormPage,
  myForm,
  hide: hide$1
};
const MyInputRadio = ({ inputRef, name, onChange }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("strong", { children: "Gender:" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("label", { style: { marginRight: "10px" }, children: [
      /* @__PURE__ */ jsx("input", { type: "radio", value: "male", ref: inputRef, name, onChange }),
      "male"
    ] }),
    /* @__PURE__ */ jsxs("label", { style: { marginRight: "10px" }, children: [
      /* @__PURE__ */ jsx("input", { type: "radio", value: "female", ref: inputRef, name, onChange }),
      "female"
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("input", { type: "radio", value: "other", ref: inputRef, name, onChange }),
      "other"
    ] })
  ] });
};
const wrapper = "_wrapper_3izs0_1";
const hide = "_hide_3izs0_9";
const container = "_container_3izs0_17";
const label = "_label_3izs0_31";
const img = "_img_3izs0_59";
const input = "_input_3izs0_77";
const classes = {
  wrapper,
  hide,
  container,
  label,
  img,
  input
};
const MyInputFile = ({ inputRef, name, onChange, reference }) => {
  const addImgHandler = (event) => {
    var _a;
    const imgInput = event.target;
    const file = (_a = imgInput.files) == null ? void 0 : _a.item(0);
    if (!file)
      return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      reference.current.src = reader.result;
      reference.current.className = "img";
    };
    return;
  };
  return /* @__PURE__ */ jsxs("div", { className: classes.wrapper, children: [
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Add image" }) }),
    /* @__PURE__ */ jsxs("div", { className: classes.container, children: [
      /* @__PURE__ */ jsxs("label", { className: classes.label, id: "add-img-label", htmlFor: "add-single-img", children: [
        "+",
        /* @__PURE__ */ jsx("img", { ref: reference, className: classes.hide, alt: "img" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: classes.input,
          type: "file",
          id: "add-single-img",
          accept: "image/jpeg",
          ref: inputRef,
          name,
          onChange: (e) => {
            addImgHandler(e);
            onChange(e);
          }
        }
      )
    ] })
  ] });
};
const initialState = [
  {
    title: "Andrew",
    bthDate: "1995-10-03",
    country: "Belarus",
    allow: true,
    sex: "male",
    img: "data:image/png;base64,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"
  },
  {
    title: "Anton",
    bthDate: "1996-01-30",
    country: "Belarus",
    allow: false,
    sex: "male",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfycDzL-0Ir5rK6pTfrDX9ZlRopk19AllZc9YBwJ7kvkBlr_FHKwcDBO77ZB1-hZFU6n8&usqp=CAU"
  }
];
const formSlice = createSlice({
  name: "formCards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    }
  }
});
const { addCard } = formSlice.actions;
const formReducer = formSlice.reducer;
const MyForm = () => {
  const image = useRef();
  const { register, reset, handleSubmit } = useForm();
  const cardsArray = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const newCard = {
      title: data.title,
      bthDate: data.btnDate,
      country: data.country,
      allow: data.allow,
      sex: data.sex,
      img: ""
    };
    const file = data.img.item(0);
    if (!file)
      return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      newCard.img = reader.result;
      dispatch(addCard(newCard));
      image.current.src = "";
      image.current.classList.value = "hide";
      reset({ title: "", btnDate: "", country: "", allow: "", sex: "", img: "" });
    };
  };
  const title = register("title", { required: true });
  const btnDate = register("btnDate", { required: true });
  const country = register("country");
  const allow = register("allow");
  const sex = register("sex", { required: true });
  const img2 = register("img", { required: true });
  return /* @__PURE__ */ jsxs("div", { className: classes$1.myFormPage, children: [
    /* @__PURE__ */ jsxs("form", { className: classes$1.myForm, onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsx("h2", { children: "Contacts Form" }),
      /* @__PURE__ */ jsx(MyInputText, { inputRef: title.ref, name: title.name, onChange: title.onChange }),
      /* @__PURE__ */ jsx(MyInputDate, { inputRef: btnDate.ref, name: btnDate.name, onChange: btnDate.onChange }),
      /* @__PURE__ */ jsx(MyInputCountry, { inputRef: country.ref, name: country.name, onChange: country.onChange }),
      /* @__PURE__ */ jsx(MyInputCheckbox, { inputRef: allow.ref, name: allow.name, onChange: allow.onChange }),
      /* @__PURE__ */ jsx(MyInputRadio, { inputRef: sex.ref, name: sex.name, onChange: sex.onChange }),
      /* @__PURE__ */ jsx(MyInputFile, { inputRef: img2.ref, name: img2.name, onChange: img2.onChange, reference: image }),
      /* @__PURE__ */ jsx("input", { type: "submit", value: "Submit" })
    ] }),
    /* @__PURE__ */ jsx(MyFormCards, { cardsArray })
  ] });
};
const Forms = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(MyForm, {}) });
};
const Router = () => {
  return /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/404", element: /* @__PURE__ */ jsx(Page404, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/main", element: /* @__PURE__ */ jsx(MainPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutUs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/forms", element: /* @__PURE__ */ jsx(Forms, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/404" }) }),
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Navigate, { to: "/main" }) })
    ] })
  ] });
};
function App() {
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx(Router, {}) });
}
const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    [paintingApi.reducerPath]: paintingApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingApi.middleware)
});
if (typeof window !== "undefined") {
  const preloadedStateFromWindow = window.__PRELOADED_STATE__ || void 0;
  configureStore({
    reducer: {
      form: formReducer,
      search: searchReducer,
      [paintingApi.reducerPath]: paintingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingApi.middleware),
    preloadedState: preloadedStateFromWindow
  });
  delete window.__PRELOADED_STATE__;
}
function render() {
  const storeState = store.getState();
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { pipe, storeState };
}
export {
  render
};
