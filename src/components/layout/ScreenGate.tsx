export default function ScreenGate() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink p-8 text-center lg:hidden">
      <div className="max-w-md">
        <h1 className="font-display text-2xl font-light tracking-widest text-paper">
          이 경험은 큰 화면을 위해 만들어졌습니다.
        </h1>
        <div className="my-6 h-px w-16 bg-mist/30 mx-auto" />
        <p className="font-body text-caption tracking-cinematic text-stone">
          This experience is designed for larger screens.
        </p>
        <p className="font-body text-small tracking-normal text-stone/60 mt-2">
          Please view on a desktop or landscape tablet.
        </p>
      </div>
    </div>
  );
}
