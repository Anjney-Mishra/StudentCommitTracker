import MyNavbar from "./components/MyNavbar";
import StudentData from "../StudentData";
import { useState,useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip
} from "@nextui-org/react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const getData = async () => {
    const today = new Date();
    const todayISO = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ).toISOString();

    const apiCall = async (name, repo) => {
      try {
        const res = await axios.get(
          `https://api.github.com/repos/${name}/${repo}/commits?since=2023-10-20T00:00:00Z`
        );
        return res.data.length;
      } catch (err) {
        return 404;
      }
    };

    const results = await Promise.allSettled(
      StudentData.map(async (st) => {
        const commitCount = await apiCall(st.GitName, st.Repo);
        return {
          GitName: st.GitName,
          Repo: st.Repo,
          Branch: st.Branch,
          Section: st.Section,
          Check: commitCount, // Number of commits or error code
        };
      })
    );

    const processedResults = results.map((result) =>
      result.status === "fulfilled" ? result.value : null
    );

    setStudents(processedResults.filter(Boolean));
    setFilteredStudents(processedResults.filter(Boolean));
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
    <MyNavbar/>

    <div className="h-[100vh] mt-[3%]">

{/* table */}
<Table aria-label="FSD Git Commit Tracker Table">
  <TableHeader>
    <TableColumn>NAME</TableColumn>
    <TableColumn>Branch</TableColumn>
    <TableColumn>Section</TableColumn>
    <TableColumn>Repository</TableColumn>
    <TableColumn>Status</TableColumn>
  </TableHeader>
  <TableBody>
    {filteredStudents.map((st, ind) => (
      <TableRow key={ind}>
        <TableCell>{st.GitName}</TableCell>
        <TableCell>{st.Branch}</TableCell>
        <TableCell>{st.Section}</TableCell>
        <TableCell>{st.Repo}</TableCell>
        <TableCell>
          {st.Check === 404 ? (
            <Chip variant="flat" color="warning">
              Error
            </Chip>
          ) : st.Check > 0 ? (
            <Chip variant="flat" color="success">
              Commited
            </Chip>
          ) : (
            <Chip variant="flat" color="danger">
              Not Commited
            </Chip>
          )}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</div>

    </>
  )
}

export default App
