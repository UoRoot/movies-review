import { MediaCardSkeleton } from "./ui/cards/media-card";

export default function LoadingMediaSection() {
  return Array(20)
    .fill(null)
    .map((_, index) => <MediaCardSkeleton key={index} />);
}
