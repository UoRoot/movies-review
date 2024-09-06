import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useGenresBy } from "../hooks/use-genres-by";
import { MediaType } from "../types/local-type/media";

interface Props {
  type: MediaType;
  title: string;
}

export function SectionMediaByGenres({ type, title }: Props) {
  const { mappedGenres } = useGenresBy(type);
  const isLoading = mappedGenres.length === 0;

  return (
    <>
      {isLoading ? (
        <SectionSkeleton />
      ) : (
        <>
          <h3>{title}</h3>
          <aside className="content-list">
            {mappedGenres.map(({ id, name, count }) => (
              <a href="./" key={id}>
                <span>{name}</span>
                <span>{count}</span>
              </a>
            ))}
          </aside>
        </>
      )}
    </>
  );
}

function SectionSkeleton() {
  return (
    <SkeletonTheme baseColor="#383e48" highlightColor="#424750">
      <div
        style={{
          height: "600px",
        }}
      >
        <Skeleton style={{ width: "70%" }} />
        <div
          style={{
            height: "570px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "8px",
          }}
        >
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  height: "30px",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: `${Math.floor(Math.random() * (60 - 40 + 1)) + 40}%`,
                  }}
                >
                  <Skeleton />
                </span>
                <span style={{ display: "block", width: "30%" }}>
                  <Skeleton />
                </span>
              </div>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}
