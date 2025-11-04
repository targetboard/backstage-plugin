import { InfoCard } from "@backstage/core-components";
import { useCallback, useEffect, useState } from "react";

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

  const onMessage = useCallback((event: MessageEvent) => {
    if (event.data.type === "EMBED_SIZE") {
      // console.log('Received message:', event.data);
      if (event.data.frameId === id && event.data.height) {
        setFrameHeight(`${event.data.height}px`);
      }
    }
  }, []);

  const startListener = useCallback(() => {
    if (typeof window === "undefined") return;
    window.removeEventListener("message", onMessage);
    window.addEventListener("message", onMessage);
  }, [onMessage]);

  const stopListener = useCallback(() => {
    if (typeof window === "undefined") return;
    window.removeEventListener("message", onMessage);
  }, [onMessage]);

  useEffect(() => {
    startListener();
    return () => {
      stopListener();
    };
  }, [startListener, stopListener]);

  return (
    <InfoCard title={title}>
      <iframe
        id={id}
        src={`${domain}/embed/${embedId}?apiKey=${apiKey}&frameId=${id}`}
        style={{
          width: "100%",
          height: frameHeight,
          maxHeight,
          border: 0,
          borderRadius: "4px",
        }}
        allow={iFrameAllow}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </InfoCard>
  );
};
