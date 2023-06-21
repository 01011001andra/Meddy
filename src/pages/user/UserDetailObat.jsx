import React from "react";
import { useParams } from "react-router-dom";
import { ObatCard } from "../../components";
import { styles } from "../../utils/mainStyle";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

const UserDetailObat = () => {
  const [obat, setObat] = React.useState({});
  const [obats, setObats] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/obats/${id}`)
      .then((res) => {
        setObat(res.data);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/obats")
      .then((res) => {
        setObats(res.data);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>Detail Obat</h1>
      </div>
      <div className="w-full min-h-screen px-4 bg-secondary dark:bg-slate-800">
        <div className="flex flex-col justify-center gap-8 px-4 py-10 mx-auto max-w-7xl">
          <Link
            to="/info"
            className="text-xl font-bold text-primary hover:text-primary/60"
          >
            <ArrowBackIcon /> Kembali
          </Link>
          <div className="flex items-center justify-center mx-auto w-80 h-80">
            <img src={`../${obat.gambar}`} alt="Obat" className="h-80" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-bold text-center xl:text-start text-primary">
              {obat.name}
            </h1>
            <h1 className="font-semibold tracking-wide font-poppins">
              Kategori : {obat.jenis}
            </h1>
            <h1 className="font-semibold tracking-wide font-poppins">
              Detail Produk : {obat.deskripsi}
            </h1>
            <p className="font-semibold tracking-wide font-poppins">
              Komposisi <span className="font-medium">: {obat.komposisi}</span>
            </p>
            <p className="font-semibold tracking-wide font-poppins">
              Kegunaan <span className="font-medium">: {obat.kegunaan}</span>
            </p>
            <p className="font-semibold tracking-wide font-poppins">
              Efek Samping <span className="font-medium">: {obat.efek}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailObat;
