import React from 'react'
import styles from '@/styles/adminCreateSchool.module.css'
import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { AiOutlineLink, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

function AdminCreateSchoolContent() {
  return (
    <>
      <div style={{ marginBottom: "2rem", display: 'flex', justifyContent: 'space-between', padding: "0 .5rem" }}>
        <p style={{ fontSize: '1.2rem', color: '#191919', fontWeight: '500' }}>Add School Information</p>
        <p style={{ fontSize: "1rem", color: 'gray' }}><span style={{ color: "#191919", fontWeight: "500" }}>School</span> / Edit School Information</p>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.infoText}>School Information</p>
        <form>
          <div className={styles.formGrid}>
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-schoolname"
              label="School Name"
              placeholder='Type here'
              variant="outlined"
              name='school_name'
            />
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-year"
              label="Year of Etablishment"
              variant="outlined"
              type='date'
              name='year_of_et'
            />
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-motto"
              label="Motto"
              placeholder='Type here'
              variant="outlined"
              name='school_motto'
            />
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-students"
              label="Total Students"
              variant="outlined"
              name='school_students'
            />
            <TextField
              focused
              size='small'
              id="outlined-adornment-teachers"
              label="Total Teachers"
              variant="outlined"
              name='school_teachers'
            />
            <TextField
              focused
              size='small'
              id="outlined-adornment-Plans"
              label="Plans"
              variant="outlined"
              name='school_Plans'
            />
            <FormControl size='small' focused required>
              <InputLabel id="demo-simple-select-label">Term System</InputLabel>
              <Select
                id="country-term_system"
                label="Term System"
                value={'Term 1'}
              >
                <MenuItem value={'Term 1'}>Term 1</MenuItem>
                <MenuItem value={'Term 2'}>Term 2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-pricipal_name"
              label="Pricipal Name"
              variant="outlined"
              name='school_pricipal_name'
            />
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-phone_No"
              InputProps={{
                endAdornment: <InputAdornment position="start"><AiOutlinePhone color='#191919' /></InputAdornment>,
              }}
              label="Phone"
              variant="outlined"
              name='school_phone_No'
            />

            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-weburl"
              InputProps={{
                endAdornment: <InputAdornment position="start"><AiOutlineLink color='#191919' /></InputAdornment>,
              }}
              label="Website url"
              type='url'
              variant="outlined"
              name='school_weburl'
            />

            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-email"
              label="Email address"
              variant="outlined"
              name='school_email'
            />
            <TextField
              focused
              size='small'
              id="outlined-adornment-address"
              InputProps={{
                endAdornment: <InputAdornment position="start"><GoLocation color='#191919' /></InputAdornment>,
              }}
              label="Address"
              type='url'
              variant="outlined"
              name='school_address'
            />
            <FormControl size='small' focused required>
              <InputLabel id="demo-simple-select-label">Region</InputLabel>
              <Select
                id="region-select"
                label="Region"
              >
              </Select>
            </FormControl>
            <FormControl size='small' focused required>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                id="city-select"
                label="City"
              >
              </Select>
            </FormControl>
            <FormControl size='small' focused required>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                id="country-select"
                label="Country"
              >
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <TextField
              focused
              required
              id="outlined-adornment-description"
              label="Brief Description"
              variant="outlined"
              name='school_description'
              multiline
              rows={4}
              fullWidth
            />
          </div>

          <div style={{ marginTop: ".8rem" }}>
            <p style={{ marginBottom: '1.5rem', color: "#444444", fontSize: '1rem', fontWeight: '600' }}>Upload School Logo (150px * 150px)</p>
            <label className={styles.fileUpload}>Choose File
              <input type='file' style={{ display: "none" }} name='school_logo' />
            </label>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Button variant='contained' sx={{ borderRadius: '6px', backgroundColor: "#5D79E6", width: "150px" }}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminCreateSchoolContent