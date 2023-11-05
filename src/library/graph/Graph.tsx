import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, { Controls, Background, Node, NodeTypes, Edge, OnConnect, OnEdgesChange, OnNodesChange, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import { ProfileNode } from "./ProfileNode";

// interface GraphProps  {
// }


const rfStyle = {
    backgroundColor: '#B8CEFF',
  };

const initialNodes: Node[] = [
    { id: '1', type: 'profileNode', data: { label: 'Node 1' , imgSrc: './bait.jpg'}, position: { x: 0, y: 0 } },
    { id: '2', type: 'profileNode', data: { label: 'Node 2' , imgSrc: './momo.png'}, position: { x: 200, y: 0 } },
  ];

  const initialEdges = [{ id: '1-2', source: '1', target: '2' }];

const Graph = () => {
    // const Graph = ({  }: GraphProps) => {

    const nodeTypes: NodeTypes = useMemo(() => ({ profileNode: ProfileNode }), []);

    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
   
    const onNodesChange: OnNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes],
    );
    const onEdgesChange: OnEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      [setEdges],
    );
    const onConnect: OnConnect = useCallback(
      (connection) => setEdges((eds) => addEdge(connection, eds)),
      [setEdges],
    );
    return (
       <div style={{ height: '100%' }}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView 
            style={rfStyle}

        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    )
};

export { Graph };
// export { Graph, type GraphProps };
