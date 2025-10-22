import { InfoCard } from "@backstage/core-components";
import { useEffect, useState } from "react";

export type TargetBoardEmbedCardProps = {
  embedId: string;
  apiKey: string;
  domain?: string;
  title?: string;
  height?: string;
  maxHeight?: string;
  iFrameAllow?: string;
};

export const TargetBoardEmbedCard = ({
  title,
  domain = "https://app.targetboard.ai",
  embedId,
  apiKey,
  height = "480px",
  maxHeight,
  iFrameAllow,
}: TargetBoardEmbedCardProps) => {
  const id = `embeddable-${embedId}`;
  const [frameHeight, setFrameHeight] = useState(height);

  useEffect(() => {
    startListener();
    return () => {
      stopListener();
    };
  }, []);

  const startListener = () => {
    if (typeof window === "undefined") return;
    window.addEventListener("message", onMessage);
  };

  const stopListener = () => {
    if (typeof window === "undefined") return;
    window.removeEventListener("message", onMessage);
  };

  const onMessage = (event: MessageEvent) => {
    if (event.data.type === "EMBED_SIZE") {
      // console.log('Received message:', event.data);
      if (event.data.frameId === id && event.data.height) {
        setFrameHeight(`${event.data.height}px`);
      }
    }
  };

  return (
    <InfoCard title={title}>
      <iframe
        id={id}
        src={`${domain}/embed/${embedId}?apiKey=${apiKey}&frameId=${id}`}
        style={{ width: "100%", height: frameHeight, maxHeight, border: 0 }}
        allow={iFrameAllow}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </InfoCard>
  );
};
