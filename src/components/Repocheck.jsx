import StudentData from "../../data/StudentData";
import { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import axios from "axios";
import MySkeleton from "./MySkeleton";

const Repocheck = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [showNonCommitters, setShowNonCommitters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");

  const getData = async () => {
    // const today = new Date();
    // const todayISO = new Date(
    //   today.getFullYear(),
    //   today.getMonth(),
    //   today.getDate()
    // ).toISOString();

    const todayISO = date ? new Date(date).toISOString() : new Date().toISOString();

    //since=2023-10-20T00:00:00Z

    const apiCall = async (name, repo) => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.github.com/repos/${name}/${repo}/commits?since=${todayISO}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
            },
          }
        );
        return res.data.length;
      } catch (err) {
        console.error(err);
        return 404;
      }
    };

    const results = await Promise.allSettled(
      StudentData.map(async (st) => {
        const commitCount = await apiCall(st.GitName, st.Repo);
        return {
          Name: st.Name,
          GitName: st.GitName,
          Repo: st.Repo,
          Branch: st.Branch,
          Section: st.Section,
          Check: commitCount,
        };
      })
    );

    const processedResults = results.map((result) =>
      result.status === "fulfilled" ? result.value : null
    );

    setStudents(processedResults.filter(Boolean));
    setFilteredStudents(processedResults.filter(Boolean));
    setLoading(false);
  };

  // Filter students based on branch, section, and non-committer status
  const filterStudents = (branch, section, showNonCommitters) => {
    const filtered = students.filter((st) => {
      const isBranchMatch = branch ? st.Branch === branch : true;
      const isSectionMatch = section ? st.Section === section : true;
      const isNonCommitterMatch = showNonCommitters
        ? st.Check === 0 || st.Check === 404
        : true;
      return isBranchMatch && isSectionMatch && isNonCommitterMatch;
    });
    setFilteredStudents(filtered);
  };

  const handleBranchFilter = (event) => {
    const value = event.target.value;
    setSelectedBranch(value);
    filterStudents(value, selectedSection, showNonCommitters);
  };

  const handleSectionFilter = (event) => {
    const value = event.target.value;
    setSelectedSection(value);
    filterStudents(selectedBranch, value, showNonCommitters);
  };

  const handleNonCommitters = () => {
    setShowNonCommitters(!showNonCommitters);
    filterStudents(selectedBranch, selectedSection, !showNonCommitters);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [date]);

  return (
    <>
      <div className="p-8 bg-black-400 m-4">
        <h1 className="text-6xl font-semibold text-center">
          Student Commit Tracker
        </h1>
      </div>

      {/* Filter Section */}
      <div className="p-2">
        <h1 className="text-xl font-semibold mb-8">Filter Students</h1>
        <div className="flex gap-4 mb-4">
          <select
            value={selectedBranch}
            onChange={handleBranchFilter}
            className="p-2 border rounded"
          >
            <option value="">All Branches</option>
            <option value="IT">IT</option>
            <option value="CS">CS</option>
            <option value="ME">ME</option>
            <option value="CSE_AIML">CSE_AIML</option>
          </select>

          <select
            value={selectedSection}
            onChange={handleSectionFilter}
            className="p-2 border rounded"
          >
            <option value="">All Sections</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="p-2 border rounded"
          />

        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Button onClick={handleNonCommitters} color="danger">
            {showNonCommitters ? "Show All" : "Show Non-Committers"}
          </Button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="h-[100vh] mt-[2%]">
          <MySkeleton />
        </div>
      ) : (
        <div className="h-auto mt-[2%]">
          <Table aria-label="FSD Git Commit Tracker Table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>GitUserName</TableColumn>
              <TableColumn>Branch</TableColumn>
              <TableColumn>Section</TableColumn>
              <TableColumn>Repository</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Commits</TableColumn>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((st, ind) => (
                <TableRow key={ind}>
                  <TableCell>{st.Name}</TableCell>
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
                        Committed
                      </Chip>
                    ) : (
                      <Chip variant="flat" color="danger">
                        Not Committed
                      </Chip>
                    )}
                  </TableCell>
                  <TableCell>
                    {st.Check != 404 && st.Check > 0 ? (
                      <Chip variant="flat" color="success">
                        {st.Check}
                      </Chip>
                    ) : 
                    (st.Check===404? <Chip variant="flat" color="warning">Error</Chip>
                    : <Chip variant="flat" color="danger">0</Chip>)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Repocheck;
