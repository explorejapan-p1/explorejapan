type Props = {locale: string};

export function VideoSlot({locale}: Props) {
  const isJa = locale === 'ja';
  return (
    <aside className="video-slot" aria-label={isJa ? '週次動画（空）' : 'Weekly video (empty)'}>
      <div className="video-frame" />
      <p>
        {isJa
          ? '9:16 週次動画スロット。ファイルはまだありません。'
          : '9:16 weekly video slot. No file yet.'}
      </p>
    </aside>
  );
}
