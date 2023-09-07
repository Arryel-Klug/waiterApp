import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import { Input, ModalBody, ModalForm, ModalHeader, Overlay } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();

  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <Input
              placeholder="Número da Mesa"
              placeholderTextColor="#666"
              keyboardType='number-pad'
              onChangeText={setTable}
            />

            <Button
              label="Salvar"
              onPress={handleSave}
              disabled={table.length === 0}
            />
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
