import React from "react";

export const downloadCV = (toggleMenu: React.Dispatch<React.SetStateAction<boolean>>) => {
    fetch("KareemCV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "KareemCV.pdf";
        alink.click();
      });
    });

    toggleMenu(false);
  };