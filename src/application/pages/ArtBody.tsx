import React from "react";
import { PDFViewer } from "../../library/pdf_viewer";
import { Flex } from "@chakra-ui/react";

const ArtBody = () => {
  return (
    <Flex>
          <PDFViewer fileUrl="/wall.pdf" />
    </Flex>
  );
};

export { ArtBody };
