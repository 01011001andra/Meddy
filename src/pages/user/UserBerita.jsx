import axios from "axios";
import React from "react";
import { BeritaCard } from "../../components";
import { useScrollToTop } from "../../hooks";
import { styles } from "../../utils/mainStyle";
import moment from "moment";
import "moment/locale/id";

const UserBerita = () => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://vijayasena.marsanix.com/api/beritas")
      .then((res) => {
        setNews(res.data);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useScrollToTop();
  return (
    <div className="min-h-screen pt-24 bg-cover dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('./loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>Berita</h1>
      </div>
      <div className="w-full min-h-screen bg-secondary dark:bg-slate-800">
        <div className="flex flex-wrap justify-center w-full min-h-screen gap-8 py-10 mx-auto xl:justify-between max-w-7xl">
          {news.map((item) => {
            console.log(item.gambar);
            return (
              <BeritaCard
                key={item.uuid}
                url={`./${item.gambar}`}
                alt={item.name}
                date={moment
                  .utc(item.createdAt)
                  .locale("id")
                  .format("dddd, D MMMM YYYY HH:mm")}
                title={`${item.judul}`}
                linkID={`/berita/${item.uuid}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserBerita;
