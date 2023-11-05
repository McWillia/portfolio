import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from 'reactflow';


interface ProfileNodeProps  {
    imgSrc: string | undefined,
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileNode = ({ data:{ imgSrc } }: any) =>(<Box>
          <Handle type="target" position={Position.Top} isConnectable />

    <Image
                borderRadius='full'
                w={"11rem"}
                h={"11rem"}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={imgSrc ?? '/sad_aang.png'} 
            />
          <Handle type="source" position={Position.Bottom} isConnectable />

    </Box>)
    

export { ProfileNode, type ProfileNodeProps };
