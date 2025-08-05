import React from "react";
import { Flex } from "@chakra-ui/react";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


interface MiddleProps {
  fileUrl: string;
}

const PDFViewer = ({ fileUrl }: MiddleProps) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Flex className="PdfViewer" h={"100%"} w={"100%"} position={"relative"}>
        <Viewer fileUrl={fileUrl} />;
      </Flex>
    </Worker>
  );
};

export { PDFViewer };
