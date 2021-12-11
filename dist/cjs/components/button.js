var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  Button: () => Button
});
var import_core = __toModule(require("@tamagui/core"));
const Button = (0, import_core.styled)(import_core.Stack, {
  tag: "button",
  alignItems: "center",
  flexShrink: 0,
  justifyContent: "center",
  backgroundColor: "white",
  borderColor: "#999",
  borderWidth: 1,
  borderRadius: 3,
  height: 25,
  paddingLeft: 10,
  paddingRight: 10,
  variants: {
    disabled: {
      true: {
        backgroundColor: "gray",
        shadowColor: "gray",
        pointerEvents: "none"
      }
    },
    active: {
      true: {
        backgroundColor: "gray"
      }
    },
    size: {
      1: {
        borderRadius: "2",
        height: 25,
        paddingHorizontal: 10
      },
      2: {
        borderRadius: "3",
        height: 35,
        paddingHorizontal: 15
      }
    },
    blue: {
      true: {
        backgroundColor: "blue",
        borderColor: "gray"
      }
    },
    red: {
      true: {
        backgroundColor: "red",
        borderColor: "gray"
      }
    }
  }
});
//# sourceMappingURL=button.js.map
