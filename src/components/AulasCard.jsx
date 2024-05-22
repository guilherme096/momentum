import React, { useState } from 'react';
import CardLayout from "../layouts/CardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AulasDeleteModal from './AulasDeleteModal';

export default function AulasCard({ name, time, date }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log(name);
    deleteClassByName(name); // Certifique-se de que 'name' é o nome da classe que você deseja deletar
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AulasDeleteModal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
      <CardLayout>
        <div className="flex items-center ">
          <h3 className="text-xl font-bold mr-2">{name}</h3>
          <button className="flex items-center" onClick={handleDeleteClick}>
            <FontAwesomeIcon icon={faTrashCan} className="text-lg cursor-pointer text-red-400" />
          </button>
        </div>
        <p className="text-sm mb-0 mt-2">{date}</p>
        <p className="text-sm inline">{time}</p>
      </CardLayout>
    </>
  );
}

function deleteClassByName(nameToDelete) {
  // Obter os dados atuais do localStorage
  let scheduledClassesString = localStorage.getItem('scheduled_classes');
  
  // Verificar se há algum dado antes de tentar parseá-lo
  if (scheduledClassesString) {
    // Parsear a string JSON para um objeto JavaScript
    let scheduledClasses = JSON.parse(scheduledClassesString);
    
    // Filtrar os dados para excluir o item com o nome especificado
    let updatedScheduledClasses = scheduledClasses.filter(classItem => classItem.name!== nameToDelete);
    
    // Converter o novo array filtrado de volta para uma string JSON
    let updatedScheduledClassesString = JSON.stringify(updatedScheduledClasses);
    
    // Atualizar o localStorage com a nova string JSON
    localStorage.setItem('scheduled_classes', updatedScheduledClassesString);
  }
}
