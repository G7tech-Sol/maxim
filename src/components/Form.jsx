"use client";
import { Link, Box, Grid } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Heading from "./Heading";
import Buttons from "./Button";
import InputTextMultiple from "./InputTextMultiple";
import InputAutofill from "./InputAutofill";

const FormContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  textAlign: "left",
  maxWidth: 787,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const data = [
  {
    priorAuthorization: "Not Required",
    procedureService: "CT Scan Chest",
    procedureServiceDescription:
      "Computed Tomography (CT) Scan of the chest is an imaging procedure that uses X-rays to create detailed pictures of the chest and upper abdomen. It is used to diagnose and monitor various conditions such as infections, lung diseases, and tumors.",
    insurer: "Florida Blue",
    title: "70544 - Magnetic resonance angiography, head; without contrast material(s)",
    dateOriginalEffective: "05/20/12",
    revised: "08/15/23",
  },
  {
    priorAuthorization: "Required",
    procedureService: "CT Scan Chest",
    procedureServiceDescription:
      "Computed Tomography (CT) Scan of the chest is an imaging procedure that uses X-rays to create detailed pictures of the chest and upper abdomen. It is used to diagnose and monitor various conditions such as infections, lung diseases, and tumors.",
    insurer: "Florida Blue",
    title: "70545 - Magnetic resonance angiography, head",
    dateOriginalEffective: "05/20/12",
    revised: "08/15/23",
  },
  {
    priorAuthorization: "Not Required",
    procedureService: "Ultrasound Abdomen Complete",
    procedureServiceDescription:
      "Abdominal ultrasound is a noninvasive diagnostic test that uses high-frequency sound waves to create images of the organs and structures within the abdomen. It is used to diagnose a variety of conditions affecting organs such as the liver, gallbladder, pancreas, and kidneys.",
    insurer: "Cigna",
    title: "76700 - Ultrasound, abdominal, complete",
    dateOriginalEffective: "01/10/11",
    revised: "07/10/23",
  },
  {
    priorAuthorization: "Required",
    procedureService: "Echocardiogram",
    procedureServiceDescription:
      "An echocardiogram is an ultrasound of the heart. It is used to assess the structure and function of the heart, including the chambers, valves, and major blood vessels. It is particularly useful in diagnosing heart diseases such as valve disorders and cardiomyopathies.",
    insurer: "United Health Care",
    title: "93306 - Echocardiography, transthoracic; complete",
    dateOriginalEffective: "03/25/14",
    revised: "06/20/23",
  },
  {
    priorAuthorization: "Required",
    procedureService: "MRI Spine Cervical",
    procedureServiceDescription:
      "Magnetic Resonance Imaging (MRI) of the cervical spine is used to assess the vertebrae in the neck, the spinal cord, and the surrounding tissues. It is typically used for the evaluation of spinal cord compression, disc herniation, and other spinal pathologies.",
    insurer: "Humana",
    title: "72141 - MRI, cervical spine; without contrast material(s)",
    dateOriginalEffective: "09/15/16",
    revised: "10/05/23",
  },
  {
    priorAuthorization: "Not Required",
    procedureService: "X-ray Chest",
    procedureServiceDescription:
      "Chest X-rays are a common imaging test used to view the lungs, heart, and chest wall. They are used to diagnose a range of conditions, including infections, lung diseases, and heart conditions.",
    insurer: "Blue Cross Blue Shield",
    title: "71045 - X-ray, chest; single view",
    dateOriginalEffective: "02/20/10",
    revised: "04/22/23",
  },
];

const dropdownOptions = [
  {
    value: "Florida Blue",
    label: "Florida Blue",
    image: "/assets/images/florida-blue.png",
  },
  {
    value: "First Family Insurance",
    label: "First Family Insurance",
    image: "/assets/images/first-family-insurance.png",
  },
];

const Form = ({ onCheck }) => {
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [procedureCode, setProcedureCode] = useState("");
  const [fields, setFields] = useState([1]);

  const handleAddField = () => {
    setFields([...fields, fields.length + 1]);
  };

  const handleRemoveField = (index) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };

  const handleCheck = () => {
    const filterData = data.filter(
      (item) => item.insurer.toLowerCase() === insuranceCompany.toLowerCase()
    );
    onCheck(filterData);
  };

  const handleChange = (event, newValue) => {
    setInsuranceCompany(newValue);
  };

  const options = ["Florida Blue", "First Family Insurance"];

  return (
    <FormContainer
      sx={{
        border: "2px solid #EBEAED",
        borderRadius: "10px",
        marginTop: {
          xs: "30px",
          sm: 4,
          md: "50px",
          lg: "50px",
          xl: 8,
        },
        paddingX: {
          xs: 3,
          sm: 4,
          md: "64px",
          lg: "64px",
          xl: 8,
        },
        paddingY: {
          xs: 3,
          sm: 4,
          md: "44px",
          lg: "44px",
          xl: 8,
        },
      }}
    >
      <Heading variant="textHeading">Insurance Company</Heading>
      <Heading variant="text">Enter the insurance Company Name</Heading>

      <InputAutofill
        placeholder="Search Company"
        name="insuranceCompany"
        value={insuranceCompany}
        onChange={handleChange}
        options={options}
      />

      <Heading variant="textHeading" sx={{ mt: 2 }}>
        Procedure Code
      </Heading>
      <Heading variant="text">
        You can type the procedure code your doctor will use to bill for the planned service or
        item. You can also type part of the code&apos;s description to search, for example type
        &quot;tonsil&quot; to find &quot;Removal of tonsils.&quot;
      </Heading>

      {fields.map((field, index) => (
        <InputTextMultiple
          key={index}
          index={index}
          name="procedureCode"
          value={procedureCode}
          onChange={(e) => setProcedureCode(e.target.value)}
          handleRemoveField={handleRemoveField}
          placeholder={"Enter Procedure Code"}
          totalFields={fields.length}
        />
      ))}

      <Box sx={{ display: "inline-flex", alignItems: "center", paddingY: 3 }}>
        <AddCircleOutlineIcon sx={{ mr: 1, color: "secondary.main" }} />
        <Link
          sx={{
            display: "block",
            color: "secondary.main",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            handleAddField();
          }}
        >
          Add another Procedure Code
        </Link>
      </Box>

      <Grid container justifyContent="flex-end">
        <Buttons variant="check" onClick={handleCheck}>
          Check
        </Buttons>
      </Grid>
    </FormContainer>
  );
};

export default Form;
