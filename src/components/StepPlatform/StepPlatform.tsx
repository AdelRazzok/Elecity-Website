import React from 'react'
import { Button, ButtonToolbar, Loader, Modal, Placeholder, Table, Timeline } from 'rsuite';
import CreditCardIcon from '@rsuite/icons/legacy/CreditCard';
import PlaneIcon from '@rsuite/icons/legacy/Plane';
import TruckIcon from '@rsuite/icons/legacy/Truck';
import UserIcon from '@rsuite/icons/legacy/User';
import CheckIcon from '@rsuite/icons/legacy/Check';
import "rsuite/dist/rsuite.min.css"
import moment from 'moment';
import { Link } from 'react-router-dom';

const { Column, HeaderCell, Cell } = Table;

const StepPlatform = ({ platforms, handleplatform, handlePostRent, rent_info }) => {

  const offers_label = {
    "629b7aab3058a860f6a33315": "Citadine - Peugeot e-208",
    "629b7aad3058a860f6a33317": "Suv - Peugeot e-2008",
    "629b7ab03058a860f6a33319": "Combispace - Peugeot e-Rifter"
  }

  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false);
  const handleClose = () => setOpen(false)
  const handleClose2 = () => setOpen2(false)
  const handleValidate = () => {
    setOpen(false)
    handlePostRent()
    setOpen2(true)
  }
  const handleDiscard = () => {
    setOpen(false)
  }


  return (
    <>
      <Table
        height={400}
        data={platforms}
      >

        <Column width={150}>
          <HeaderCell>Ville</HeaderCell>
          <Cell dataKey="address.city" />
        </Column>

        <Column width={300}>
          <HeaderCell>Adresse</HeaderCell>
          <Cell dataKey="address.street" />
        </Column>

        <Column width={150}>
          <HeaderCell>Code Postal</HeaderCell>
          <Cell dataKey="address.zipcode" />
        </Column>

        <Column width={150}>
          <HeaderCell>Tél.</HeaderCell>
          <Cell dataKey="phone" />
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell>{ }</HeaderCell>

          <Cell>
            {rowData => (
              <span>
                {/* <a onClick={() => {
                handleplatform(rowData)
              }}> Choisir </a> */}
                <ButtonToolbar>
                  <Button onClick={() => {
                    setOpen(true)
                    handleplatform(rowData)
                  }}> Choisir </Button>
                </ButtonToolbar>
              </span>
            )}
          </Cell>
        </Column>
      </Table>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Récapitulatif réservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Timeline className="custom-timeline">
            <Timeline.Item dot={<CreditCardIcon />}>
              <p>Votre Parc</p>
              {rent_info.platform?.address.city &&
                <p>{`${rent_info.platform.address.street}, ${rent_info.platform.address.city} ${rent_info.platform.address.zipcode}`}</p>
              }
            </Timeline.Item>
            <Timeline.Item dot={<PlaneIcon />}>
              <p>Votre Offre</p>
              <p>{offers_label[rent_info.offerId]}</p>
            </Timeline.Item>
            <Timeline.Item dot={<TruckIcon />}>
              <p>Date de départ</p>
              <p>{moment(rent_info.startDate).toLocaleString()}</p>
            </Timeline.Item>
            <Timeline.Item dot={<UserIcon />}>
              <p>Date de fin</p>
              <p>{moment(rent_info.endDate).toLocaleString()}</p>
            </Timeline.Item>
          </Timeline>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleValidate} appearance="primary">
            Valider
          </Button>
          <Button onClick={handleDiscard} appearance="subtle">
            Annulé
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {rent_info.resRent ? (
            <>
              <p><strong>Votre réservation :</strong></p>
              <p>Parc :</p>
              <p>{`${rent_info.platform.address.street}, ${rent_info.platform.address.city} ${rent_info.platform.address.zipcode}`}</p>
              <br />
              <p>Date de départ</p>
              <p>{moment(rent_info.startDate).toLocaleString()}</p>
              <br />
              <img src={rent_info.resRent.rents[0].qrcode} alt="" />
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Loader size="md" />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose2} appearance="primary">
            <Link to="/" style={{ color: "white" }}>Fermer</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default StepPlatform