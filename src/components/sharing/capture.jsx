import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FaShareAlt } from "react-icons/fa";
import "./capture.css"

const CapturePage = () => {

  const captureFullPage = async () => {
    try {
      const element = document.documentElement;

      const canvas = await html2canvas(element, {
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        width: element.scrollWidth,
        height: element.scrollHeight,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        scale: 2,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; 
      const pageHeight = 297; 
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('capture.pdf');
    } catch (err) {
      console.error("Error capturing page: ", err);
    }
  };

  return (
    <div className='share'>
      <button onClick={captureFullPage}><FaShareAlt /></button>
    </div>
  );
};

export default CapturePage;
