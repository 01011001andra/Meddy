import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { styles } from "../../utils/mainStyle";
import moment from "moment";
import "moment/locale/id";

const UserDetailBerita = () => {
  const { id } = useParams();
  const [news, setNews] = React.useState({});
  console.info(id);

  React.useEffect(() => {
    axios
      .get(`http://vijayasena.marsanix.com/api/beritas/${id}`)
      .then((res) => {
        setNews(res.data);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="min-h-screen pt-24 bg-cover dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Detail Berita
        </h1>
      </div>
      <div className="w-full min-h-screen px-4 bg-secondary dark:bg-slate-800 2xl:px-0">
        <div className="flex flex-col w-full min-h-screen gap-5 py-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center w-full max-w-xl gap-3 pt-6 mx-auto">
            <h1 className="text-2xl font-bold tracking-wider text-center text-primary">
              {news.judul}
            </h1>
            <h2 className="text-xl text-center text-zinc-600">
              <span className="text-primary">Medicine Teddy</span>
            </h2>
            <small className="text-sm text-center text-zinc-500">
              {moment
                .utc(news.createdAt)
                .locale("id")
                .format("dddd, D MMMM YYYY HH:mm")}
            </small>
          </div>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col justify-center gap-8 xl:flex-row ">
              <img src={`../${news.gambar}`} className="h-96 max-w-10" />
            </div>
            <p className="text-sm tracking-wide text-justify ">{news.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailBerita;
