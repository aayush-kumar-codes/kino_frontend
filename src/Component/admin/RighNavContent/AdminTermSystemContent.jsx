import React from 'react'
import styles from '@/styles/adminCreateSchool.module.css'
import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { AiOutlineLink, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

function AdminTermSystemContent() {
  return (
    <>
      <div style={{ marginBottom: "2rem", display: 'flex', justifyContent: 'space-between', padding: "0 .5rem" }}>
        <p style={{ fontSize: '1.2rem', color: '#191919', fontWeight: '500' }}>Create Term</p>
        <p style={{ fontSize: "1rem", color: 'gray' }}><span style={{ color: "#191919", fontWeight: "500" }}>Term</span> / Add Term Information</p>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.infoText}>Basic details</p>
        <form>
          <div className={styles.formGrid}>
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-term-date"
              label="Term Start Date"
              variant="outlined"
              type='date'
              name='term_start_date'
            />
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-midterm-break"
              label="Mid Term Break"
              variant="outlined"
              type='date'
              name='midterm-break'
            />
            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-termend-date"
              label="Term End Date"
              variant="outlined"
              type='date'
              name='term_end_date'
            />

            <FormControl size='small' focused required>
              <InputLabel >Term Name</InputLabel>
              <Select
                id="country-term_system"
                label="Term Name"
                value={'Term 1'}
              >
                <MenuItem value={'Term 1'}>Term 1</MenuItem>
                <MenuItem value={'Term 2'}>Term 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl size='small' focused required>
              <InputLabel >Country</InputLabel>
              <Select
                id="country-select"
                label="Country"
                value={'Kenya'}
              >
                <MenuItem value={'Kenya'}>Kenya</MenuItem>
              </Select>
            </FormControl>

            <FormControl size='small' focused required>
              <InputLabel >Academic Terms</InputLabel>
              <Select
                id="academic-terms-select"
                label="Academic Terms"
                value={'Three'}
              >
                <MenuItem value={'One'}>One</MenuItem>
                <MenuItem value={'Two'}>Two</MenuItem>
                <MenuItem value={'Three'}>Three</MenuItem>
              </Select>
            </FormControl>


            <FormControl size='small' focused required>
              <InputLabel >Academic Year</InputLabel>
              <Select
                id="academic-year-select"
                label="Academic Year"
                value={'2023'}
              >
                <MenuItem value={'2021'}>2021</MenuItem>
                <MenuItem value={'2022'}>2022</MenuItem>
                <MenuItem value={'2023'}>2023</MenuItem>
              </Select>
            </FormControl>


            <FormControl size='small' focused required>
              <InputLabel >Weeks</InputLabel>
              <Select
                id="academic-weeks-select"
                label="Weeks"
                value={'16'}
              >
                <MenuItem value={'15'}>15</MenuItem>
                <MenuItem value={'16'}>16</MenuItem>
                <MenuItem value={'17'}>17</MenuItem>
              </Select>
            </FormControl>


            <FormControl size='small' focused required>
              <InputLabel >Months</InputLabel>
              <Select
                id="academic-months-select"
                label="Months"
                value={'4'}
              >
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4'}>4</MenuItem>
                <MenuItem value={'5'}>5</MenuItem>
              </Select>
            </FormControl>

            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-examstart-date"
              label="Exam Start Date"
              variant="outlined"
              type='date'
              name='exam_start_date'
            />

            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-examend-date"
              label="Exam End Date"
              variant="outlined"
              type='date'
              name='exam_end_date'
            />

            <FormControl size='small' focused required>
              <InputLabel >Country</InputLabel>
              <Select
                id="country1-select"
                label="Country"
                value={'Uganda'}
              >
                <MenuItem value={'Uganda'}>Uganda</MenuItem>
              </Select>
            </FormControl>

          </div>
          <div style={{ marginTop: "1rem", fontWeight: "500", fontSize: '1.3rem' }}>
            <p>Other Relevant Information</p>
          </div>
          <div className={styles.formGrid} style={{ margin: "2rem 0" }}>
            <FormControl size='small' focused required>
              <InputLabel >Other Events</InputLabel>
              <Select
                id="other_events-select"
                label="Other Events"
                value={'Sport Day'}
              >
                <MenuItem value={'Sport Day'}>Sport Day</MenuItem>
              </Select>
            </FormControl>

            <TextField
              focused
              required
              size='small'
              id="outlined-adornment-endstart-date"
              label="End Start Date"
              variant="outlined"
              type='date'
              name='end_start_date'
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Button variant='contained' sx={{ borderRadius: '6px', backgroundColor: "#5D79E6", width: "150px" }}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminTermSystemContent